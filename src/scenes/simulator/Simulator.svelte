<script>
  import { onMount } from 'svelte';
  import { setScene, SCENES, userName } from '../../lib/stores.js';
  import NeoList from './components/NeoList.svelte';
  import NeoDetail from './components/NeoDetail.svelte';
  import NeoSimulation from './components/NeoSimulation.svelte';
  
  // Variables locales para manejar asteroides solo en esta escena
  let asteroids = [];
  let csvAsteroids = []; // Nueva variable para almacenar datos del CSV
  let selectedAsteroid = null;
  let isLoading = false;
  let loadError = null;
  
  // Datos de ejemplo de asteroides (luego puedes conectarlo a una API real)
  const sampleAsteroids = [
    {
      name: "2023 BU",
      estimated_diameter_min: 3.4,
      estimated_diameter_max: 7.6,
      relative_velocity: 27400,
      miss_distance_km: 9200,
      close_approach_date: "2023-10-15",
      is_potentially_hazardous: true
    },
    {
      name: "2023 DW",
      estimated_diameter_min: 1.2,
      estimated_diameter_max: 2.7,
      relative_velocity: 18600,
      miss_distance_km: 145000,
      close_approach_date: "2023-10-18",
      is_potentially_hazardous: false
    },
    {
      name: "2023 FX5",
      estimated_diameter_min: 15.8,
      estimated_diameter_max: 35.4,
      relative_velocity: 31200,
      miss_distance_km: 8900000,
      close_approach_date: "2023-10-22",
      is_potentially_hazardous: false
    },
    {
      name: "Apophis",
      estimated_diameter_min: 310,
      estimated_diameter_max: 340,
      relative_velocity: 23800,
      miss_distance_km: 31000,
      close_approach_date: "2029-04-13",
      is_potentially_hazardous: true
    }
  ];
  
  // Función para obtener la URL correcta del archivo
  function getCSVUrl() {
    // En desarrollo, Vite sirve desde la raíz
    // En producción (GitHub Pages), necesitamos el base path
    const isDevelopment = import.meta.env.DEV;
    const basePath = isDevelopment ? '' : import.meta.env.BASE_URL || '/meteor-madness/';
    return `${basePath}sbdb_query_results.csv`;
  }

  // Método alternativo de carga si el primer método falla
  async function loadCSVAlternative() {
    const alternativeUrls = [
      './sbdb_query_results.csv',
      '../../../public/sbdb_query_results.csv',
      '/public/sbdb_query_results.csv'
    ];

    for (const url of alternativeUrls) {
      try {
        console.log(`Probando URL alternativa: ${url}`);
        const response = await fetch(url);
        if (response.ok) {
          const csvText = await response.text();
          await processCSVText(csvText);
          return;
        }
      } catch (e) {
        console.log(`Falló URL ${url}:`, e.message);
      }
    }
    throw new Error('Todas las URLs alternativas fallaron');
  }

  // Función separada para procesar el texto CSV
  async function processCSVText(csvText) {
    // Parsear el CSV
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
    
    csvAsteroids = lines.slice(1).map(line => {
      // Parsear cada línea teniendo en cuenta las comillas
      const values = [];
      let currentValue = '';
      let insideQuotes = false;
      
      for (let char of line) {
        if (char === '"') {
          insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
          values.push(currentValue.trim());
          currentValue = '';
        } else {
          currentValue += char;
        }
      }
      values.push(currentValue.trim()); // Agregar el último valor
      
      // Crear objeto con los datos del asteroide
      const asteroid = {};
      headers.forEach((header, index) => {
        const value = values[index] || '';
        asteroid[header] = value;
      });
      
      return asteroid;
    });
    
    console.log(`Cargados ${csvAsteroids.length} asteroides del CSV (método alternativo)`);
    
    // Convertir a formato de la app y usar una muestra
    const convertedData = convertCSVToAppFormat(csvAsteroids.slice(0, 50));
    asteroids = convertedData;
    loadError = null; // Limpiar error si la carga alternativa fue exitosa
  }

  // Función para cargar y parsear el archivo CSV
  async function loadCSVData() {
    try {
      isLoading = true;
      loadError = null;
      
      // Obtener la URL correcta del archivo CSV
      const csvUrl = getCSVUrl();
      console.log('Intentando cargar CSV desde:', csvUrl);
      
      const response = await fetch(csvUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - URL: ${csvUrl}`);
      }
      
      const csvText = await response.text();
      await processCSVText(csvText);
      
    } catch (error) {
      console.error('Error cargando el archivo CSV:', error);
      loadError = error.message;
      
      // Intentar método alternativo usando diferentes URLs
      try {
        console.log('Intentando método alternativo...');
        await loadCSVAlternative();
      } catch (altError) {
        console.error('Error en método alternativo:', altError);
        // Fallback final a los datos de ejemplo
        if (asteroids.length === 0) {
          asteroids = sampleAsteroids;
          loadError = `Error de carga: ${error.message}. Usando datos de ejemplo.`;
        }
      }
    } finally {
      isLoading = false;
    }
  }
  
  // Función de debug para probar manualmente la carga
  async function debugLoadCSV() {
    console.log('=== DEBUG LOAD CSV ===');
    console.log('Environment:', {
      DEV: import.meta.env.DEV,
      BASE_URL: import.meta.env.BASE_URL,
      MODE: import.meta.env.MODE
    });
    console.log('Current location:', window.location.href);
    console.log('CSV URL will be:', getCSVUrl());
    
    await loadCSVData();
  }

  // Cargar datos al montar el componente
  onMount(() => {
    loadCSVData();
  });
  
  // Mantener los datos de ejemplo como fallback
  $: if (asteroids.length === 0 && !isLoading) {
    asteroids = sampleAsteroids;
  }
  
  // Función para convertir datos CSV al formato de la app
  function convertCSVToAppFormat(csvData) {
    return csvData.map(item => ({
      name: item.full_name?.replace(/"/g, '') || 'Unknown',
      // Usar datos orbitales del CSV cuando estén disponibles
      semi_major_axis: parseFloat(item.a) || 1.0,
      eccentricity: parseFloat(item.e) || 0.1,
      inclination: parseFloat(item.i) || 0.0,
      // Datos estimados basados en magnitud absoluta (H)
      estimated_diameter_min: item.H ? Math.pow(10, (15.75 - parseFloat(item.H)) / 5) * 0.8 : Math.random() * 10 + 1,
      estimated_diameter_max: item.H ? Math.pow(10, (15.75 - parseFloat(item.H)) / 5) * 1.2 : Math.random() * 20 + 5,
      relative_velocity: Math.random() * 30000 + 10000,
      miss_distance_km: Math.random() * 10000000 + 50000,
      close_approach_date: "2024-" + String(Math.floor(Math.random() * 12) + 1).padStart(2, '0') + "-" + String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'),
      is_potentially_hazardous: parseFloat(item.q || 0) < 0.05, // Distancia perihelion < 0.05 AU
      // Datos orbitales adicionales del CSV
      orbital_data: {
        a: parseFloat(item.a) || 1.0,        // Semi-major axis
        e: parseFloat(item.e) || 0.1,        // Eccentricity  
        i: parseFloat(item.i) || 0.0,        // Inclination
        om: parseFloat(item.om) || 0.0,      // Longitude of ascending node
        w: parseFloat(item.w) || 0.0,        // Argument of perihelion
        q: parseFloat(item.q) || 0.9,        // Perihelion distance
        ad: parseFloat(item.ad) || 1.1,      // Aphelion distance
        per_y: parseFloat(item.per_y) || 1.0, // Orbital period in years
        H: parseFloat(item.H) || 18.0        // Absolute magnitude
      }
    }));
  }
  
  function handleAsteroidSelection(event) {
    selectedAsteroid = event.detail;
  }
  
  function goToMission() {
    setScene(SCENES.MISSION);
  }
</script>

<section class="simulator">
  <!-- Simulación 3D principal -->
  <div class="neo-simulation">
    <NeoSimulation {selectedAsteroid} />
  </div>
  
  <!-- Lista de asteroides detectados -->
  <div class="neo-list">
    {#if isLoading}
      <div class="loading-indicator">
        <div class="spinner"></div>
        <p>Cargando datos de asteroides...</p>
      </div>
    {:else if loadError}
      <div class="error-indicator">
        <p>⚠️ Error: {loadError}</p>
        <p>Usando datos de ejemplo</p>
      </div>
    {/if}
    <NeoList {asteroids} {selectedAsteroid} on:asteroidSelected={handleAsteroidSelection} />
    {#if csvAsteroids.length > 0}
      <div class="data-info">
        <small>📊 Datos del CSV: {csvAsteroids.length} asteroides disponibles</small>
      </div>
    {:else}
      <div class="debug-controls">
        <button class="debug-btn" on:click={debugLoadCSV}>
          🔍 Debug: Recargar CSV
        </button>
      </div>
    {/if}
  </div>
  
  <!-- Panel de detalles del asteroide seleccionado -->
  <div class="neo-detail">
    <NeoDetail {selectedAsteroid} />
  </div>
  
  <button class="action-btn" on:click={goToMission}>
    🎯 Ir a Estrategia
  </button>
</section>

<style>
  .simulator {
    /* Grid Layout con areas */
    display: grid;
    grid-template-areas:
      "list simulation detail";
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto;
    gap: 2rem;
  }
  
  /* Grid Areas */
  .neo-simulation {
    grid-area: simulation;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .neo-list {
    grid-area: list;
    background: rgba(255,255,255,0.05);
    border-radius: 10px;
    padding: 1rem;
  }
  
  .neo-detail {
    grid-area: detail;
    background: rgba(255,255,255,0.05);
    border-radius: 10px;
    padding: 1rem;
  }
  
  .action-btn {
    background: #4caf50;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
  }
  
  .action-btn:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(76, 175, 80, 0.6);
  }
  
  .action-btn:active {
    transform: translateY(0);
  }
  
  /* Estilos para indicadores de carga */
  .loading-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    color: #4caf50;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(76, 175, 80, 0.3);
    border-left: 4px solid #4caf50;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .error-indicator {
    background: rgba(255, 107, 107, 0.2);
    border: 1px solid rgba(255, 107, 107, 0.5);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    color: #ffcccb;
  }
  
  .data-info {
    margin-top: 1rem;
    padding: 0.5rem;
    background: rgba(76, 175, 80, 0.2);
    border-radius: 5px;
    text-align: center;
  }
  
  .data-info small {
    color: #a8e6a1;
  }

  .debug-controls {
    margin-top: 1rem;
    text-align: center;
  }

  .debug-btn {
    background: rgba(255, 193, 7, 0.8);
    color: #333;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .debug-btn:hover {
    background: rgba(255, 193, 7, 1);
    transform: translateY(-1px);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .simulator {
      grid-template-areas:
        "simulation"
        "neo-list"
        "neo-detail"
        "action";
      grid-template-columns: 1fr;
      grid-template-rows: 2fr auto auto auto;
      gap: 1rem;
      padding: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .simulator {
      min-height: auto;
    }
  }
</style>

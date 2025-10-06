<script>
  import { onMount } from 'svelte';
  import { setScene, SCENES, userName } from '../../lib/stores.js';
  import { loadCSV } from '../../lib/csvService.js';
  import { processAsteroids } from '../../lib/asteroidProcessor.js';
  import NeoList from './components/NeoList.svelte';
  import NeoDetail from './components/NeoDetail.svelte';
  import NeoSimulation from './components/NeoSimulation.svelte';
  
  // Variables locales para manejar asteroides solo en esta escena
  let asteroids = [];
  let csvAsteroids = []; // Nueva variable para almacenar datos crudos del CSV
  let selectedAsteroid = null;
  let isLoading = false;
  let loadError = null;
  
  // Función para cargar datos CSV y procesarlos
  async function loadCSVData() {
    try {
      isLoading = true;
      loadError = null;
      
      // Cargar datos del CSV usando el servicio genérico
      const csvResult = await loadCSV('sbdb_query_results.csv', {
        logProgress: true,
        alternativeUrls: [] // El servicio ya tiene URLs por defecto
      });
      
      // Guardar datos crudos del CSV
      csvAsteroids = csvResult.data;
      console.log('CSV Data Sample:', csvAsteroids.slice(0, 3));
      
      // Procesar los datos usando el procesador de asteroides
      const processedData = processAsteroids(csvAsteroids.slice(0, 50));
      asteroids = processedData;
      
      console.log(`✅ Procesados ${asteroids.length} asteroides`);
      
    } catch (error) {
      console.error('❌ Error cargando asteroides:', error);
      loadError = error.message;
      asteroids = []; // Array vacío si falla la carga
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
    
    await loadCSVData();
  }

  // Cargar datos al montar el componente
  onMount(() => {
    loadCSVData();
  });
  

  
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
    <NeoSimulation />
  </div>
  
  <!-- Lista de asteroides detectados -->
  <div class="neo-list">
    <NeoList 
      {asteroids} 
      {selectedAsteroid} 
      {isLoading}
      {loadError}
      {csvAsteroids}
      onDebugReload={debugLoadCSV}
      on:asteroidSelected={handleAsteroidSelection} 
    />
  </div>
  
  <!-- Panel de detalles del asteroide seleccionado -->
  <div class="neo-detail">
    <NeoDetail {selectedAsteroid} />
  </div>
  
  <!-- <button class="action-btn" on:click={goToMission}>
    🎯 Ir a Estrategia
  </button> -->
  <a class="action-btn" href="https://modelo-colision.onrender.com" target="_blank">Ir a Modelo de Colisión</a>
</section>

<style>
  .simulator {
    /* Grid Layout con areas */
    display: grid;
    grid-template-areas:
      "list simulation detail";
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 100vh;
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
    margin: 1rem auto;
    display: block;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
  }
  
  .action-btn:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(76, 175, 80, 0.6);
  }
  
  .action-btn:active {
    transform: translateY(0);
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

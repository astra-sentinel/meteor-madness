<script>
  import { setScene, SCENES, userName } from '../../lib/stores.js';
  import NeoList from './components/NeoList.svelte';
  import NeoDetail from './components/NeoDetail.svelte';
  import NeoSimulation from './components/NeoSimulation.svelte';
  
  // Variables locales para manejar asteroides solo en esta escena
  let asteroids = [];
  let selectedAsteroid = null;
  
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
  
  // Cargar datos de asteroides cuando se monta el componente
  $: if (asteroids.length === 0) {
    asteroids = sampleAsteroids;
  }
  
  function handleAsteroidSelection(event) {
    selectedAsteroid = event.detail;
  }
  
  function goToMission() {
    setScene(SCENES.MISSION);
  }
</script>

<section class="simulator">
  <h2>🛰️ Simulador</h2>
  <p>Perfecto {$userName ? $userName : 'Comandante'}, ¡la simulación está en progreso!</p>
  <p>Analizando la trayectoria del meteorito y calculando posibles soluciones...</p>
  
  <!-- Simulación 3D principal -->
  <div class="simulation-3d">
    <NeoSimulation {selectedAsteroid} />
  </div>
  
  <div class="simulator-content">
    <!-- Lista de asteroides detectados -->
    <div class="asteroids-section">
      <NeoList {asteroids} {selectedAsteroid} on:asteroidSelected={handleAsteroidSelection} />
    </div>
    
    <!-- Panel de detalles del asteroide seleccionado -->
    <NeoDetail {selectedAsteroid} />
  </div>
  
  <button class="action-btn" on:click={goToMission}>
    🎯 Ir a Estrategia
  </button>
</section>

<style>
  .simulator {
    padding: 2rem;
    text-align: center;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    border-radius: 15px;
    color: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .simulation-3d {
    margin: 2rem 0;
    border-radius: 10px;
    overflow: hidden;
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
    margin-top: 1rem;
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
  
  /* Nuevos estilos para la estructura de simulador */
  .simulator-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 2rem 0;
    text-align: left;
  }
  
  .asteroids-section {
    background: rgba(255,255,255,0.05);
    border-radius: 10px;
    padding: 1rem;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .simulator-content {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>

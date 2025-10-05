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
  <!-- Simulación 3D principal -->
  <div class="neo-simulation">
    <NeoSimulation {selectedAsteroid} />
  </div>
  
  <!-- Lista de asteroides detectados -->
  <div class="neo-list">
    <NeoList {asteroids} {selectedAsteroid} on:asteroidSelected={handleAsteroidSelection} />
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
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .simulator {
      grid-template-areas:
        "list"
        "simulation"
        "detail";
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

<script>
  import { createEventDispatcher } from 'svelte';
  
  export let asteroids = [];
  export let selectedAsteroid = null;
  
  const dispatch = createEventDispatcher();
  
  // Función para obtener el emoji del nivel de peligro
  function getDangerEmoji(asteroid) {
    if (asteroid.is_potentially_hazardous) {
      return '🔴';
    } else if (asteroid.estimated_diameter_max > 500) {
      return '🟡';
    }
    return '🟢';
  }
  
  // Función para formatear distancia de forma compacta
  function formatDistance(distance) {
    if (distance > 1000000) {
      return `${(distance / 1000000).toFixed(1)}M km`;
    }
    return `${Math.round(distance / 1000)}K km`;
  }
  
  function selectAsteroid(asteroid) {
    dispatch('asteroidSelected', asteroid);
  }
</script>

<div class="neo-list">
  <h3>🌌 Asteroides Detectados ({asteroids.length})</h3>
  
  {#if asteroids.length === 0}
    <div class="loading">
      <div class="spinner"></div>
      <p>Escaneando el espacio...</p>
    </div>
  {:else}
    <div class="asteroids-list">
      {#each asteroids as asteroid, index}
        <button 
          class="asteroid-item {selectedAsteroid?.name === asteroid.name ? 'selected' : ''}"
          on:click={() => selectAsteroid(asteroid)}
        >
          <span class="danger-indicator">{getDangerEmoji(asteroid)}</span>
          <div class="asteroid-basic-info">
            <div class="name">{asteroid.name}</div>
            <div class="distance">{formatDistance(asteroid.miss_distance_km)}</div>
          </div>
          <div class="select-arrow">▶</div>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .neo-list {
    margin: 2rem 0;
  }
  
  h3 {
    color: #fff;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.3rem;
  }
  
  .loading {
    text-align: center;
    color: rgba(255,255,255,0.8);
    padding: 2rem;
  }
  
  .spinner {
    width: 30px;
    height: 30px;
    border: 3px solid rgba(255,255,255,0.3);
    border-left: 3px solid #4caf50;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .asteroids-list {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    background: rgba(255,255,255,0.05);
  }
  
  /* Scrollbar personalizado */
  .asteroids-list::-webkit-scrollbar {
    width: 6px;
  }
  
  .asteroids-list::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.1);
  }
  
  .asteroids-list::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.3);
    border-radius: 3px;
  }
  
  .asteroid-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
    text-align: left;
  }
  
  .asteroid-item:hover {
    background: rgba(255,255,255,0.1);
  }
  
  .asteroid-item.selected {
    background: rgba(76, 175, 80, 0.2);
    border-left: 3px solid #4caf50;
  }
  
  .asteroid-item:last-child {
    border-bottom: none;
  }
  
  .danger-indicator {
    font-size: 1rem;
    flex-shrink: 0;
  }
  
  .asteroid-basic-info {
    flex-grow: 1;
    min-width: 0;
  }
  
  .name {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .distance {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.7);
  }
  
  .select-arrow {
    color: rgba(255,255,255,0.5);
    font-size: 0.8rem;
    transition: color 0.2s ease;
  }
  
  .asteroid-item:hover .select-arrow {
    color: rgba(255,255,255,0.8);
  }
  
  .asteroid-item.selected .select-arrow {
    color: #4caf50;
  }
</style>

<script>
  import { setScene, SCENES, userName } from '../../lib/stores.js';
  
  function goToMission() {
    setScene(SCENES.MISSION);
  }
</script>

<section class="simulator">
  <h2>🛰️ Simulador</h2>
  <p>Perfecto {$userName ? $userName : 'Comandante'}, ¡la simulación está en progreso!</p>
  <p>Analizando la trayectoria del meteorito y calculando posibles soluciones...</p>
  
  <div class="simulation-display">
    <div class="meteor">☄️</div>
    <div class="earth">🌍</div>
  </div>
  
  <button class="action-btn" on:click={goToMission}>
    🎯 Ir a Estrategia
  </button>
</section>

<style>
  .simulator {
    padding: 3rem;
    text-align: center;
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    border-radius: 15px;
    color: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
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
  
  .simulation-display {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0;
    padding: 2rem;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    backdrop-filter: blur(10px);
  }
  
  .meteor, .earth {
    font-size: 4rem;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .meteor {
    animation: moveTowardsEarth 3s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @keyframes moveTowardsEarth {
    0% { transform: translateX(-50px) rotate(0deg); }
    50% { transform: translateX(-20px) rotate(180deg); }
    100% { transform: translateX(-50px) rotate(360deg); }
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
</style>

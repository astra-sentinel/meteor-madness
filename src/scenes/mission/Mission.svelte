<script>
  import { setScene, SCENES } from '../../lib/stores.js';
  
  function goBackToIntro() {
    setScene(SCENES.INTRO);
  }
</script>

<section class="mission">
  <h2>🎯 Estrategia</h2>
  <p>Estamos en la escena de estrategia. ¡Es hora de tomar decisiones críticas!</p>
  <p>Basándote en la simulación, debes elegir la mejor estrategia para salvar la Tierra.</p>
  
  <div class="strategy-options">
    <div class="option">
      <h3>🚀 Misil Nuclear</h3>
      <p>Destruir el meteorito con armamento nuclear</p>
    </div>
    
    <div class="option">
      <h3>🛸 Desviación Gravitacional</h3>
      <p>Usar naves espaciales para alterar su trayectoria</p>
    </div>
    
    <div class="option">
      <h3>⚡ Láser Orbital</h3>
      <p>Vaporizar el meteorito con tecnología avanzada</p>
    </div>
  </div>
  
  <button class="action-btn" on:click={goBackToIntro}>
    🔄 Volver al Inicio
  </button>
</section>

<style>
  .mission {
    padding: 3rem;
    text-align: center;
    background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%);
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
  
  .strategy-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .option {
    background: rgba(255,255,255,0.15);
    padding: 1.5rem;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .option:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
  
  .option h3 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  
  .option p {
    font-size: 1rem;
    margin: 0;
  }
  
  .action-btn {
    background: #e91e63;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 2rem;
    box-shadow: 0 5px 15px rgba(233, 30, 99, 0.4);
  }
  
  .action-btn:hover {
    background: #c2185b;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(233, 30, 99, 0.6);
  }
  
  .action-btn:active {
    transform: translateY(0);
  }
</style>

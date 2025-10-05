<script>
  import { setScene, SCENES, userName, resetApp } from '../../lib/stores.js';
  
  function goBackToIntro() {
    resetApp();
  }
</script>

<section class="mission">
  <h2>🎯 Estrategia</h2>
  <p>Excelente trabajo {$userName ? $userName : 'Comandante'}. ¡Es hora de tomar decisiones críticas!</p>
  <p>Basándote en la simulación completada, debes elegir la mejor estrategia para salvar la Tierra.</p>
  
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
  }
</style>

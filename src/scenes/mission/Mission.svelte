<script>
  import { setScene, SCENES, userName, resetApp } from '../../lib/stores.js';
  
  function goBackToIntro() {
    resetApp();
  }
</script>

<section class="mission">
  <h2>🎯 Strategy</h2>
  <p>Excellent work {$userName ? $userName : 'Commander'}. It's time to make critical decisions!</p>
  <p>Based on the completed simulation, you must choose the best strategy to save Earth.</p>
  
  <div class="strategy-options">
    <div class="option">
      <h3>🚀 Nuclear Missile</h3>
      <p>Destroy the meteorite with nuclear weapons</p>
    </div>
    
    <div class="option">
      <h3>🛸 Gravitational Deflection</h3>
      <p>Use spacecraft to alter its trajectory</p>
    </div>
    
    <div class="option">
      <h3>⚡ Orbital Laser</h3>
      <p>Vaporize the meteorite with advanced technology</p>
    </div>
  </div>
  
  <button class="action-btn" on:click={goBackToIntro}>
    🔄 Return to Start
  </button>
</section>

<style>
  .mission {
    padding: 3rem;
  }
</style>

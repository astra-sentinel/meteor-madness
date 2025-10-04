<script>
  import { setScene, SCENES } from '../../lib/stores.js';
  
  function goToSimulator() {
    setScene(SCENES.SIMULATOR);
  }
</script>

<section class="intro">
  <h2>🌌 Introducción</h2>
  <p>Estamos en la escena de introducción. ¡Bienvenido a Meteor Madness!</p>
  <p>Un meteorito se acerca peligrosamente a la Tierra. Es tu momento de actuar.</p>
  
  <button class="action-btn" on:click={goToSimulator}>
    🚀 Iniciar Simulación
  </button>
</section>

<style>
  .intro {
    padding: 3rem;
    text-align: center;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
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
  
  .action-btn {
    background: #ff6b35;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
  }
  
  .action-btn:hover {
    background: #ff5722;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(255, 107, 53, 0.6);
  }
  
  .action-btn:active {
    transform: translateY(0);
  }
</style>

<script>
  import { setScene, SCENES } from '../../lib/stores.js';
  
  function goToSimulator() {
    setScene(SCENES.SIMULATOR);
  }
</script>

<section class="intro">
      <div>
    <h1>ASTRA SENTINEL </h1>

    <input type="text" placeholder="¿Como prefieres que te llamemos?">
    
    <p> Bienvenido a Astra Sentinel, co, una empresa dedicada a la proteccion planetaria y al aprovechamiento de los recursos que pueden proporcionar los asteroides.</p>
    
    <p>En Astra Sentinel, nos encargamos de detectar, clasificar y procesar asteroides presentes en el sistema solar, hemos logrado redireccionar asterioides con el fin de elegir su trayectoria, dandonos la oportunidad de extraer sus recursos por medio de empresas mineras externas.</p>
    
    <p>Por medio espectrografia podemos detectar los contenidos minerales de varios asteroides, con el fin de clasificarlos y seleccionarlos, con nuestra constelacion de satelites en orbita, tenemos la capacidad de usar a nuestro favor procesos como ablasion por laser y el efecto Yarkovsky para controlar las trayectorias de los asteriodes con el fin de capturarlos, controlar el lugar de impacto y obtener sus minerales.</p>
    
    <p>Tú Misión es proteger la tierra de impactos catastróficos y al mismo tiempo  transformar esa amenaza en una fuente de mineralogía, lo que sería una oportunidad de conservación Ambiental.
La minería espacial elimina la necesidad de deforestación masiva, contaminación de fuentes hídricas y erosión del suelo causadas por la minería tradicional, cada asteroide procesado equivale a preservar miles de hectáreas de bosques y ecosistemas irremplazables.
"Astra Sentinel no es solo una empresa; es el comienzo de una nueva era donde la humanidad finalmente toma control de su destino cósmico. 
</p>

</div>
 
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

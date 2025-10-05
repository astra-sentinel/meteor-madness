<script>
  import { setScene, SCENES, userName, setUserName } from '../../lib/stores.js';
  
  let localName = '';
  
  // Reactivamente actualizar el store cuando cambie el nombre local
  $: if (localName.trim()) {
    setUserName(localName.trim());
  }
  
  function goToSimulator() {
    if (localName.trim()) {
      setUserName(localName.trim());
      setScene(SCENES.SIMULATOR);
    } else {
      alert('Por favor ingresa tu nombre antes de continuar');
    }
  }
</script>

<section class="intro">
  <div>
    <!-- Seccion 1 -->
    <h1>Bienvenido a Astra Sentinel</h1>
    <p>Antes de comenzar, dinos cómo quieres que te llame nuestro sistema de comando:</p>
    <input type="text" placeholder="Tu nombre" bind:value={localName}>

    <!-- Seccion 2 -->
    <p>Hola {localName || 'Comandante'}</p>
    <p>Has sido asignado al Centro de Operaciones Orbitales de AstraSentinel, la corporación líder en defensa planetaria y exploración de recursos espaciales.</p>
    <p>Durante décadas, la humanidad miró al cielo con asombro. Hoy, lo hacemos con determinación. Nuestra misión es clara: proteger la Tierra de amenazas cósmicas y convertir lo que alguna vez fueron riesgos en oportunidades.</p>

    <!-- Seccion 3 -->
    <p>El espacio ya no es un territorio lejano. Es el nuevo frente de seguridad global.</p>
    <p>Cada año, miles de objetos cruzan las cercanías de nuestro planeta. La mayoría son inofensivos... otros podrían borrar a la humanidad en cuestión de días.</p>
    <p>AstraSentinel nació para anticipar esos eventos y responder con precisión quirúrgica, combinando ciencia, estrategia y tecnología orbital de última generación.</p>

    <!-- Seccion 4 -->
    <p>Has sido seleccionado por tu capacidad analítica y visión estratégica.</p>
    <p>A partir de hoy, formarás parte de la División de Monitoreo y Mitigación de Riesgos Espaciales.</p>
    <p>Tu trabajo: identificar objetos cercanos a la Tierra, evaluar su trayectoria, y determinar si representan una amenaza... o una oportunidad minera.</p>

    <!-- Seccion 5 -->
    <p>Para cumplir con esta tarea, contarás con el acceso total a nuestra red de defensa orbital:</p>
    <p>Constelación Sentinel: más de 160 satélites armados con láseres de desviación orbitando estratégicamente el planeta.</p>
    <p>Estaciones Terrestres: proyectores de alta potencia capaces de modificar trayectorias desde la superficie.</p>
    <p>Centro de Inteligencia Estratégica: un equipo multidisciplinario que incluye analistas, diplomáticos, ingenieros, estrategas y científicos planetarios.</p>

    <!-- Seccion 6 -->
    <p>En breves momentos ingresarás a la sala de monitoreo orbital.</p>
    <p>Allí tendrás acceso al mapa dinámico del sistema solar cercano, donde cada objeto detectado es una posible amenaza... o una valiosa fuente de minerales.</p>
    <p>Elige sabiamente tu objetivo. Tu decisión marcará el curso de nuestra operación y el destino de nuestro planeta.</p>

    <!-- Seccion 7 -->
    <p>El futuro de la Tierra está en tus manos, {localName}.</p>
    <p>Cuando estés listo… entra al Centro de Monitoreo.</p>
  </div>
 
  <button class="action-btn" on:click={goToSimulator}>
    Ingresar al centro de monitoreo
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
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  input {
    padding: 0.8rem 1rem;
    font-size: 1.1rem;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 10px;
    background: rgba(255,255,255,0.1);
    color: white;
    margin: 1rem 0;
    min-width: 250px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  
  input::placeholder {
    color: rgba(255,255,255,0.7);
  }
  
  input:focus {
    outline: none;
    border-color: #ff6b35;
    background: rgba(255,255,255,0.15);
    box-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
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

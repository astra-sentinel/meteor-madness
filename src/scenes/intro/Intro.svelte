<script>
  import { setScene, SCENES, userName, setUserName } from '../../lib/stores.js';
  
  let localName = '';
  let currentSection = 1;
  const totalSections = 7;
  
  // Reactivamente actualizar el store cuando cambie el nombre local
  $: if (localName.trim()) {
    setUserName(localName.trim());
  }
  
  // Función para avanzar a la siguiente sección
  function nextSection() {
    // Validar que en la primera sección se haya ingresado el nombre
    if (currentSection === 1 && !localName.trim()) {
      alert('Por favor ingresa tu nombre antes de continuar');
      return;
    }
    
    if (currentSection < totalSections) {
      currentSection++;
    }
  }
  
  // Función para regresar a la sección anterior
  function previousSection() {
    if (currentSection > 1) {
      currentSection--;
    }
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

<section class="intro w-full">
  <div class="container">
    <!-- Seccion 1: Bienvenida e ingreso de nombre -->
    {#if currentSection === 1}
      <img src="logotype.png" alt="Astra Sentinel Logo" class="logo">
      <p class="mb-4 text-center text-2xl">Antes de comenzar, dinos cómo quieres que te llame nuestro sistema de comando:</p>
      <div class="flex justify-center">
        <input 
          type="text" 
          placeholder="Tu nombre" 
          bind:value={localName}
          class="p-3 text-center text-lg mx-auto border-2 border-white/30 rounded-xl bg-white/10 text-white my-4 min-w-[250px] backdrop-blur-md transition-all duration-300 placeholder-white/70 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg focus:shadow-orange-500/30"
        >
      </div>
    {/if}

    <!-- Seccion 2: Introducción personal y misión -->
    {#if currentSection === 2}
      <p class="mb-4 leading-relaxed">Bienvenido <strong class="text-orange-300">{localName}</strong>! Has sido asignado al Centro de Operaciones Orbitales de AstraSentinel, la corporación líder en defensa planetaria y exploración de recursos espaciales.</p>
      <p class="mb-4 leading-relaxed">Durante décadas, la humanidad miró al cielo con asombro. Hoy, lo hacemos con determinación. Nuestra misión es clara: proteger la Tierra de amenazas cósmicas y convertir lo que alguna vez fueron riesgos en oportunidades.</p>
    {/if}

    <!-- Seccion 3: Contexto espacial -->
    {#if currentSection === 3}
      <p class="mb-4 leading-relaxed">El espacio ya no es un territorio lejano. Es el nuevo frente de seguridad global.</p>
      <p class="mb-4 leading-relaxed">Cada año, miles de objetos cruzan las cercanías de nuestro planeta. La mayoría son inofensivos... otros podrían borrar a la humanidad en cuestión de días.</p>
      <p class="mb-4 leading-relaxed">AstraSentinel nació para anticipar esos eventos y responder con precisión quirúrgica, combinando ciencia, estrategia y tecnología orbital de última generación.</p>
    {/if}

    <!-- Seccion 4: Rol del usuario -->
    {#if currentSection === 4}
      <p class="mb-4 leading-relaxed">Has sido seleccionado para comenzar tu periodo de prueba, por tu capacidad analítica y visión estratégica.</p>
      <p class="mb-4 leading-relaxed">A partir de hoy, formarás parte de la División de Monitoreo, Mitigación y Desarrollo Económico a partir de Riesgos Espaciales.</p>
      <p class="mb-4 leading-relaxed">Tu trabajo: identificar objetos cercanos a la Tierra, evaluar su trayectoria, y determinar si representan una amenaza... o una oportunidad minera.</p>
    {/if}

    <!-- Seccion 5: Herramientas disponibles -->
    {#if currentSection === 5}
      <p class="mb-4 leading-relaxed">Para cumplir con esta tarea, contarás con acceso limitado a nuestra red de defensa orbital:</p>
      <p class="mb-4 leading-relaxed"><strong class="text-orange-300">Constelación Sentinel:</strong> más de 160 satélites de vigilancia armados con láseres de desviación orbitando estratégicamente el planeta.</p>
      <p class="mb-4 leading-relaxed"><strong class="text-orange-300">Estaciones Terrestres:</strong> proyectores de alta potencia capaces de modificar trayectorias desde la superficie.</p>
      <p class="mb-4 leading-relaxed"><strong class="text-orange-300">Centro de Inteligencia Estratégica:</strong> un equipo multidisciplinario que incluye analistas, diplomáticos, ingenieros, estrategas y científicos planetarios.</p>
    {/if}

    <!-- Seccion 6: Preparación para la misión -->
    {#if currentSection === 6}
      <p class="mb-4 leading-relaxed">En breves momentos ingresarás a la sala de monitoreo orbital.</p>
      <p class="mb-4 leading-relaxed">Allí tendrás acceso al mapa dinámico del sistema solar cercano, donde cada objeto detectado es una posible amenaza... o una valiosa fuente de minerales.</p>
      <p class="mb-4 leading-relaxed">Elige sabiamente tu objetivo. Tu decisión marcará el curso de nuestra operación y el destino de nuestro planeta.</p>
    {/if}

    <!-- Seccion 7: Llamada a la acción final -->
    {#if currentSection === 7}
      <h2 class="text-3xl md:text-2xl font-bold mb-6 text-orange-500">¿Listo para Comenzar?</h2>
      <p class="mb-4 leading-relaxed">El futuro de la Tierra está en tus manos, <strong class="text-orange-300">{localName}</strong>.</p>
      <p class="mb-4 leading-relaxed">Cuando estés listo… entra al Centro de Monitoreo.</p>
    {/if}
  </div>

  <footer>
    <!-- Navegación condicional -->
    <div class="navigation-container">
      <!-- Botón de regresar: solo visible si no estamos en la primera sección -->
      <button 
        class="nav-btn back-btn"
        aria-label="Regresar"
        on:click={previousSection}
        disabled={currentSection === 1 || currentSection === totalSections}
      >
        <span class="mr-2">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
          </svg>
        </span>
        <span class="hidden md:inline">Regresar</span>
      </button>
  
      <button 
        class="enter-btn"
        on:click={goToSimulator}
        hidden={currentSection !== 7}
      >
        Ingresar al Centro de Monitoreo
      </button>

      <button 
        class="nav-btn continue-btn"
        aria-label="Continuar"
        on:click={nextSection}
        disabled={currentSection === totalSections}
      >
        <span class="hidden md:inline">Continuar</span>
        <span class="ml-2">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"></path>
          </svg>
        </span>
      </button>
    </div>
  
    <!-- Indicador de progreso -->
    <div class="mt-2 md:mt-6 text-center">
      <span class="text-md text-white/70 mb-2 block">Sección {currentSection} de {totalSections}</span>
      <div class="w-full h-1 bg-white/20 rounded-sm overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-green-500 to-orange-500 rounded-sm transition-all duration-500 ease-out" 
          style="width: {(currentSection / totalSections) * 100}%"
        ></div>
      </div>
    </div>
  </footer>
</section>

<style>
  p { font-size: 1.5rem;}
  .intro {
    min-height: 100vh;
  }

  /* Logo responsivo */
  .logo {
    display: block;
    margin: 0 auto 2rem auto;
    max-height: 50vh;
  }

  .container {
    padding: 3rem;
    margin: 0 auto;
  }

  footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }

  /* Navegación */
  .navigation-container {
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
  }

  /* Botones pequeños de navegación */
  .nav-btn {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }
  .nav-btn:disabled {
    opacity: 0;
  }

  .back-btn { grid-area: back; }
  .continue-btn { grid-area: continue; }

  .enter-btn {
    grid-area: monitor-center;
    background: #ff6b35;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
    font-weight: 600;
  }

  /* Media queries para móviles */
  @media (max-width: 640px) {
    p { font-size: 1.125rem; }

    .container {
      padding: 1rem;
    }

    .logo {
      max-width: 100%;
    }

    .navigation-container {
      padding: 1rem;
    }

    .nav-btn {
      padding: 2rem 0;
    }

    .enter-btn {
      width: 100%;
      margin: 0;
      padding: 0;
      height: 3rem;
    }
  }
</style>

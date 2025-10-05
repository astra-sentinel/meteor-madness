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
      <h2 class="text-3xl md:text-2xl font-bold mb-6 text-orange-500">Hola {localName || 'Comandante'}</h2>
      <p class="mb-4 leading-relaxed">Has sido asignado al Centro de Operaciones Orbitales de AstraSentinel, la corporación líder en defensa planetaria y exploración de recursos espaciales.</p>
      <p class="mb-4 leading-relaxed">Durante décadas, la humanidad miró al cielo con asombro. Hoy, lo hacemos con determinación. Nuestra misión es clara: proteger la Tierra de amenazas cósmicas y convertir lo que alguna vez fueron riesgos en oportunidades.</p>
    {/if}

    <!-- Seccion 3: Contexto espacial -->
    {#if currentSection === 3}
      <h2 class="text-3xl md:text-2xl font-bold mb-6 text-orange-500">El Nuevo Frente de Seguridad</h2>
      <p class="mb-4 leading-relaxed">El espacio ya no es un territorio lejano. Es el nuevo frente de seguridad global.</p>
      <p class="mb-4 leading-relaxed">Cada año, miles de objetos cruzan las cercanías de nuestro planeta. La mayoría son inofensivos... otros podrían borrar a la humanidad en cuestión de días.</p>
      <p class="mb-4 leading-relaxed">AstraSentinel nació para anticipar esos eventos y responder con precisión quirúrgica, combinando ciencia, estrategia y tecnología orbital de última generación.</p>
    {/if}

    <!-- Seccion 4: Rol del usuario -->
    {#if currentSection === 4}
      <h2 class="text-3xl md:text-2xl font-bold mb-6 text-orange-500">Tu Misión</h2>
      <p class="mb-4 leading-relaxed">Has sido seleccionado para comenzar tu periodo de prueba, por tu capacidad analítica y visión estratégica.</p>
      <p class="mb-4 leading-relaxed">A partir de hoy, formarás parte de la División de Monitoreo, Mitigación y Desarrollo Económico a partir de Riesgos Espaciales.</p>
      <p class="mb-4 leading-relaxed">Tu trabajo: identificar objetos cercanos a la Tierra, evaluar su trayectoria, y determinar si representan una amenaza... o una oportunidad minera.</p>
    {/if}

    <!-- Seccion 5: Herramientas disponibles -->
    {#if currentSection === 5}
      <h2 class="text-3xl md:text-2xl font-bold mb-6 text-orange-500">Arsenal Tecnológico</h2>
      <p class="mb-4 leading-relaxed">Para cumplir con esta tarea, contarás con acceso limitado a nuestra red de defensa orbital:</p>
      <p class="mb-4 leading-relaxed"><strong class="text-orange-300">Constelación Sentinel:</strong> más de 160 satélites de vigilancia armados con láseres de desviación orbitando estratégicamente el planeta.</p>
      <p class="mb-4 leading-relaxed"><strong class="text-orange-300">Estaciones Terrestres:</strong> proyectores de alta potencia capaces de modificar trayectorias desde la superficie.</p>
      <p class="mb-4 leading-relaxed"><strong class="text-orange-300">Centro de Inteligencia Estratégica:</strong> un equipo multidisciplinario que incluye analistas, diplomáticos, ingenieros, estrategas y científicos planetarios.</p>
    {/if}

    <!-- Seccion 6: Preparación para la misión -->
    {#if currentSection === 6}
      <h2 class="text-3xl md:text-2xl font-bold mb-6 text-orange-500">Acceso al Centro de Control</h2>
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
          on:click={previousSection}
        >
        <span class="desktop-text">← Regresar</span>
        <span class="mobile-icon">←</span>
      </button>

      <button 
        class="nav-btn continue-btn"
        on:click={nextSection}
      >
        <span class="desktop-text">Continuar →</span>
        <span class="mobile-icon">→</span>
      </button>
  
      <button 
        class="enter-btn"
        on:click={goToSimulator}
      >
        Ingresar al Centro de Monitoreo
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
    padding: 3rem;
    display: grid;
    grid-template-columns: 10rem 1fr 20rem 1fr 10rem;
    grid-template-areas: "back . monitor-center . continue";
    gap: 1rem;
    font-size: 1.5rem;
  }

  /* Botones pequeños de navegación */
  .nav-btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .back-btn {
    grid-area: back;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  .continue-btn {
    grid-area: continue;
    background: #4caf50;
    color: white;
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }

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

  /* Responsive: ocultar texto en móviles, mostrar solo iconos */
  .mobile-icon { display: none; }
  .desktop-text { display: inline; }

  /* Media queries para móviles */
  @media (max-width: 640px) {
    p { font-size: 1.125rem; }

    .container {
      padding: 1rem;
    }

    .logo {
      max-width: 100%;
    }

    .desktop-text { display: none; }
    .mobile-icon { display: inline; }

    .navigation-container {
      padding: 1rem;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "back . continue"
        "monitor-center monitor-center monitor-center";
    }

    .nav-btn {
      padding: 0.75rem;
      font-size: 1rem;
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .enter-btn {
      width: 100%;
      margin: 0;
    }
  }
</style>

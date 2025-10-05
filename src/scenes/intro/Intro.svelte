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

<section class="p-12 flex flex-col min-h-[70vh] justify-between md:p-8 sm:p-4">
  <div class="flex-grow flex flex-col justify-center max-w-4xl mx-auto">
    <!-- Seccion 1: Bienvenida e ingreso de nombre -->
    {#if currentSection === 1}
      <h1 class="text-4xl md:text-3xl font-bold mb-6 text-orange-500">Bienvenido a Astra Sentinel</h1>
      <p class="mb-4 leading-relaxed text-lg">Antes de comenzar, dinos cómo quieres que te llame nuestro sistema de comando:</p>
      <input 
        type="text" 
        placeholder="Tu nombre" 
        bind:value={localName}
        class="p-3 text-lg border-2 border-white/30 rounded-xl bg-white/10 text-white my-4 min-w-[250px] backdrop-blur-md transition-all duration-300 placeholder-white/70 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg focus:shadow-orange-500/30"
      >
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
      <p class="mb-4 leading-relaxed"><strong class="text-orange-300">Constelación Sentinel:</strong> más de 160 satélites armados con láseres de desviación orbitando estratégicamente el planeta.</p>
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

  <!-- Navegación condicional -->
  <div class="flex justify-between items-center mt-8 gap-4 md:flex-col md:gap-2">
    <!-- Botón de regresar: solo visible si no estamos en la primera sección -->
    {#if currentSection > 1}
      <button 
        class="px-6 py-3 text-base border-none rounded-full cursor-pointer transition-all duration-300 font-medium bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5 md:w-full"
        on:click={previousSection}
      >
        ← Regresar
      </button>
    {:else}
      <!-- Spacer para mantener el layout cuando no hay botón de regresar -->
      <div></div>
    {/if}

    <!-- Botón de continuar: visible en secciones 1-6, pero en sección 1 solo si hay nombre -->
    {#if currentSection < totalSections}
      {#if currentSection === 1}
        {#if localName.trim()}
          <button 
            class="px-6 py-3 text-base border-none rounded-full cursor-pointer transition-all duration-300 font-medium bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 md:w-full"
            on:click={nextSection}
          >
            Continuar →
          </button>
        {/if}
      {:else}
        <button 
          class="px-6 py-3 text-base border-none rounded-full cursor-pointer transition-all duration-300 font-medium bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 md:w-full"
          on:click={nextSection}
        >
          Continuar →
        </button>
      {/if}
    {/if}

    <!-- Botón de ingresar: solo visible en la última sección -->
    {#if currentSection === totalSections}
      <button 
        class="bg-orange-500 text-white border-none px-8 py-4 text-lg rounded-full cursor-pointer transition-all duration-300 shadow-lg shadow-orange-500/40 font-semibold hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/60 active:translate-y-0 md:w-full"
        on:click={goToSimulator}
      >
        🚀 Ingresar al Centro de Monitoreo
      </button>
    {/if}
  </div>

  <!-- Indicador de progreso -->
  <div class="mt-6 text-center">
    <span class="text-sm text-white/70 mb-2 block">Sección {currentSection} de {totalSections}</span>
    <div class="w-full h-1 bg-white/20 rounded-sm overflow-hidden">
      <div 
        class="h-full bg-gradient-to-r from-green-500 to-orange-500 rounded-sm transition-all duration-500 ease-out" 
        style="width: {(currentSection / totalSections) * 100}%"
      ></div>
    </div>
  </div>
</section>



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

<section class="intro">
  <div class="content">
    <!-- Seccion 1: Bienvenida e ingreso de nombre -->
    {#if currentSection === 1}
      <h1>Bienvenido a Astra Sentinel</h1>
      <p>Antes de comenzar, dinos cómo quieres que te llame nuestro sistema de comando:</p>
      <input type="text" placeholder="Tu nombre" bind:value={localName}>
    {/if}

    <!-- Seccion 2: Introducción personal y misión -->
    {#if currentSection === 2}
      <h2>Hola {localName || 'Comandante'}</h2>
      <p>Has sido asignado al Centro de Operaciones Orbitales de AstraSentinel, la corporación líder en defensa planetaria y exploración de recursos espaciales.</p>
      <p>Durante décadas, la humanidad miró al cielo con asombro. Hoy, lo hacemos con determinación. Nuestra misión es clara: proteger la Tierra de amenazas cósmicas y convertir lo que alguna vez fueron riesgos en oportunidades.</p>
    {/if}

    <!-- Seccion 3: Contexto espacial -->
    {#if currentSection === 3}
      <h2>El Nuevo Frente de Seguridad</h2>
      <p>El espacio ya no es un territorio lejano. Es el nuevo frente de seguridad global.</p>
      <p>Cada año, miles de objetos cruzan las cercanías de nuestro planeta. La mayoría son inofensivos... otros podrían borrar a la humanidad en cuestión de días.</p>
      <p>AstraSentinel nació para anticipar esos eventos y responder con precisión quirúrgica, combinando ciencia, estrategia y tecnología orbital de última generación.</p>
    {/if}

    <!-- Seccion 4: Rol del usuario -->
    {#if currentSection === 4}
      <h2>Tu Misión</h2>
      <p>Has sido seleccionado para comenzar tu periodo de prueba, por tu capacidad analítica y visión estratégica.</p>
      <p>A partir de hoy, formarás parte de la División de Monitoreo, Mitigación y Desarrollo Económico a partir de Riesgos Espaciales.</p>
      <p>Tu trabajo: identificar objetos cercanos a la Tierra, evaluar su trayectoria, y determinar si representan una amenaza... o una oportunidad minera.</p>
    {/if}

    <!-- Seccion 5: Herramientas disponibles -->
    {#if currentSection === 5}
      <h2>Arsenal Tecnológico</h2>
      <p>Para cumplir con esta tarea, contarás con acceso limitado a nuestra red de defensa orbital:</p>
      <p><strong>Constelación Sentinel:</strong> más de 160 satélites armados con láseres de desviación orbitando estratégicamente el planeta.</p>
      <p><strong>Estaciones Terrestres:</strong> proyectores de alta potencia capaces de modificar trayectorias desde la superficie.</p>
      <p><strong>Centro de Inteligencia Estratégica:</strong> un equipo multidisciplinario que incluye analistas, diplomáticos, ingenieros, estrategas y científicos planetarios.</p>
    {/if}

    <!-- Seccion 6: Preparación para la misión -->
    {#if currentSection === 6}
      <h2>Acceso al Centro de Control</h2>
      <p>En breves momentos ingresarás a la sala de monitoreo orbital.</p>
      <p>Allí tendrás acceso al mapa dinámico del sistema solar cercano, donde cada objeto detectado es una posible amenaza... o una valiosa fuente de minerales.</p>
      <p>Elige sabiamente tu objetivo. Tu decisión marcará el curso de nuestra operación y el destino de nuestro planeta.</p>
    {/if}

    <!-- Seccion 7: Llamada a la acción final -->
    {#if currentSection === 7}
      <h2>¿Listo para Comenzar?</h2>
      <p>El futuro de la Tierra está en tus manos, <strong>{localName}</strong>.</p>
      <p>Cuando estés listo… entra al Centro de Monitoreo.</p>
    {/if}
  </div>

  <!-- Navegación condicional -->
  <div class="navigation">
    <!-- Botón de regresar: solo visible si no estamos en la primera sección -->
    {#if currentSection > 1}
      <button class="nav-btn secondary" on:click={previousSection}>
        ← Regresar
      </button>
    {/if}

    <!-- Botón de continuar: visible en secciones 1-6, pero en sección 1 solo si hay nombre -->
    {#if currentSection < totalSections}
      {#if currentSection === 1}
        {#if localName.trim()}
          <button class="nav-btn primary" on:click={nextSection}>
            Continuar →
          </button>
        {/if}
      {:else}
        <button class="nav-btn primary" on:click={nextSection}>
          Continuar →
        </button>
      {/if}
    {/if}

    <!-- Botón de ingresar: solo visible en la última sección -->
    {#if currentSection === totalSections}
      <button class="action-btn" on:click={goToSimulator}>
        🚀 Ingresar al Centro de Monitoreo
      </button>
    {/if}
  </div>

  <!-- Indicador de progreso -->
  <div class="progress-indicator">
    <span class="progress-text">Sección {currentSection} de {totalSections}</span>
    <div class="progress-bar">
      <div class="progress-fill" style="width: {(currentSection / totalSections) * 100}%"></div>
    </div>
  </div>
</section>

<style>
  .intro {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    min-height: 70vh;
    justify-content: space-between;
  }
  
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .content h1, .content h2 {
    margin-bottom: 1.5rem;
    color: #ff6b35;
  }
  
  .content p {
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
  
  /* Navegación */
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
  }
  
  .nav-btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }
  
  .nav-btn.primary {
    background: #4caf50;
    color: white;
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }
  
  .nav-btn.primary:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(76, 175, 80, 0.4);
  }
  
  .nav-btn.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }
  
  .nav-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
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
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
    font-weight: 600;
  }
  
  .action-btn:hover {
    background: #ff5722;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(255, 107, 53, 0.6);
  }
  
  .action-btn:active {
    transform: translateY(0);
  }
  
  /* Indicador de progreso */
  .progress-indicator {
    margin-top: 1.5rem;
    text-align: center;
  }
  
  .progress-text {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;
    display: block;
  }
  
  .progress-bar {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4caf50, #ff6b35);
    border-radius: 2px;
    transition: width 0.5s ease;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .intro {
      padding: 2rem 1rem;
    }
    
    .navigation {
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .nav-btn, .action-btn {
      width: 100%;
    }
  }
</style>

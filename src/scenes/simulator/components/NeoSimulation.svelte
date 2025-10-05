<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  
  export let selectedAsteroid = null;
  
  let canvas;
  let scene, camera, renderer, earth, asteroid;
  let animationId;
  let isSimulating = false;
  
  // Parámetros de simulación (datos de ejemplo por ahora)
  let orbitalParams = {
    earthRadius: 1,
    asteroidDistance: 3,
    asteroidSpeed: 0.01,
    earthRotationSpeed: 0.005,
    asteroidSize: 0.05
  };
  
  onMount(() => {
    initThreeJS();
    createEarth();
    createAsteroid();
    createLighting();
    startAnimation();
  });
  
  onDestroy(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    if (renderer) {
      renderer.dispose();
    }
  });
  
  function initThreeJS() {
    // Crear escena
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    
    // Configurar cámara
    camera = new THREE.PerspectiveCamera(
      75, 
      canvas.clientWidth / canvas.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(5, 3, 5);
    camera.lookAt(0, 0, 0);
    
    // Configurar renderer
    renderer = new THREE.WebGLRenderer({ 
      canvas: canvas, 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Controles básicos de cámara con mouse
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('wheel', onWheel);
  }
  
  function createEarth() {
    // Geometría y material de la Tierra
    const earthGeometry = new THREE.SphereGeometry(orbitalParams.earthRadius, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x4a90e2,
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });
    
    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.castShadow = true;
    earth.receiveShadow = true;
    
    // Agregar líneas de latitud/longitud
    const earthWireframe = new THREE.WireframeGeometry(earthGeometry);
    const earthLines = new THREE.LineSegments(
      earthWireframe, 
      new THREE.LineBasicMaterial({ color: 0x87ceeb, opacity: 0.3, transparent: true })
    );
    
    scene.add(earth);
    scene.add(earthLines);
  }
  
  function createAsteroid() {
    // Geometría irregular para el asteroide
    const asteroidGeometry = new THREE.DodecahedronGeometry(orbitalParams.asteroidSize, 1);
    
    // Hacer la forma más irregular
    const positions = asteroidGeometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const vertex = new THREE.Vector3();
      vertex.fromBufferAttribute(positions, i);
      vertex.multiplyScalar(0.8 + Math.random() * 0.4); // Variación aleatoria
      positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    positions.needsUpdate = true;
    
    const asteroidMaterial = new THREE.MeshPhongMaterial({
      color: 0x8b4513,
      shininess: 30,
      transparent: true,
      opacity: 0.9
    });
    
    asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
    asteroid.castShadow = true;
    asteroid.position.set(orbitalParams.asteroidDistance, 0, 0);
    
    // Crear órbita visual
    createOrbitPath();
    
    scene.add(asteroid);
  }
  
  function createOrbitPath() {
    const orbitGeometry = new THREE.RingGeometry(
      orbitalParams.asteroidDistance - 0.02, 
      orbitalParams.asteroidDistance + 0.02, 
      64
    );
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6b35,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3
    });
    const orbitRing = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbitRing.rotation.x = Math.PI / 2;
    scene.add(orbitRing);
  }
  
  function createLighting() {
    // Luz principal (Sol)
    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(10, 10, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);
    
    // Luz ambiental suave
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    // Agregar estrellas de fondo
    createStars();
  }
  
  function createStars() {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02
    });
    
    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;
      starsVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
  }
  
  function startAnimation() {
    isSimulating = true;
    animate();
  }
  
  function animate() {
    if (!isSimulating) return;
    
    animationId = requestAnimationFrame(animate);
    
    // Rotar la Tierra
    if (earth) {
      earth.rotation.y += orbitalParams.earthRotationSpeed;
    }
    
    // Animar el asteroide en órbita
    if (asteroid) {
      const time = Date.now() * orbitalParams.asteroidSpeed;
      asteroid.position.x = Math.cos(time) * orbitalParams.asteroidDistance;
      asteroid.position.z = Math.sin(time) * orbitalParams.asteroidDistance;
      
      // Rotación del asteroide
      asteroid.rotation.x += 0.02;
      asteroid.rotation.y += 0.01;
    }
    
    renderer.render(scene, camera);
  }
  
  function toggleSimulation() {
    isSimulating = !isSimulating;
    if (isSimulating) {
      animate();
    }
  }
  
  function resetSimulation() {
    if (asteroid) {
      asteroid.position.set(orbitalParams.asteroidDistance, 0, 0);
      asteroid.rotation.set(0, 0, 0);
    }
    if (earth) {
      earth.rotation.set(0, 0, 0);
    }
  }
  
  // Controles básicos de cámara
  let mouseDown = false;
  let mouseX = 0;
  let mouseY = 0;
  
  function onMouseDown(event) {
    mouseDown = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
  
  function onMouseMove(event) {
    if (!mouseDown) return;
    
    const deltaX = event.clientX - mouseX;
    const deltaY = event.clientY - mouseY;
    
    // Rotar cámara alrededor del centro
    const spherical = new THREE.Spherical();
    spherical.setFromVector3(camera.position);
    spherical.theta -= deltaX * 0.01;
    spherical.phi += deltaY * 0.01;
    spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));
    
    camera.position.setFromSpherical(spherical);
    camera.lookAt(0, 0, 0);
    
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
  
  function onMouseUp() {
    mouseDown = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
  
  function onWheel(event) {
    const scale = event.deltaY > 0 ? 1.1 : 0.9;
    camera.position.multiplyScalar(scale);
    camera.position.clampLength(2, 20);
  }
  
  // Reactivo: actualizar simulación cuando cambie el asteroide seleccionado
  $: if (selectedAsteroid && asteroid) {
    updateAsteroidData(selectedAsteroid);
  }
  
  function updateAsteroidData(asteroidData) {
    console.log('Actualizando simulación para:', asteroidData.name);
    
    // Calcular parámetros realistas basados en los datos del asteroide
    const diameterKm = asteroidData.estimated_diameter_max / 1000; // Convertir a km
    const sizeScale = Math.max(0.03, Math.min(0.2, diameterKm * 0.1));
    
    // Convertir distancia de km a unidades astronómicas aproximadas para visualización
    const distanceAU = Math.max(2, Math.min(8, asteroidData.miss_distance_km / 149597870.7));
    
    // Velocidad orbital basada en velocidad relativa (simplificada)
    const velocityScale = Math.max(0.003, Math.min(0.025, 
      50000 / asteroidData.relative_velocity
    ));
    
    if (asteroid) {
      // Actualizar tamaño del asteroide
      asteroid.scale.setScalar(sizeScale / orbitalParams.asteroidSize);
      
      // Actualizar distancia orbital
      orbitalParams.asteroidDistance = distanceAU;
      
      // Actualizar velocidad orbital
      orbitalParams.asteroidSpeed = velocityScale;
      
      // Cambiar color basado en peligrosidad
      if (asteroidData.is_potentially_hazardous) {
        asteroid.material.color.setHex(0xff4444); // Rojo para peligrosos
      } else {
        asteroid.material.color.setHex(0x8b4513); // Marrón normal
      }
      
      // Recrear la órbita con nueva distancia
      scene.children.forEach(child => {
        if (child.geometry && child.geometry.type === 'RingGeometry') {
          scene.remove(child);
          child.geometry.dispose();
          child.material.dispose();
        }
      });
      createOrbitPath();
      
      // Reiniciar posición del asteroide
      asteroid.position.set(orbitalParams.asteroidDistance, 0, 0);
    }
  }
  
  // Función para calcular datos orbitales reales (para futuras mejoras)
  function calculateRealOrbitalData(asteroidData) {
    // Aquí podremos agregar cálculos más precisos usando:
    // - Elementos orbitales reales
    // - Leyes de Kepler
    // - Datos de la API de NASA JPL
    return {
      semiMajorAxis: asteroidData.miss_distance_km / 149597870.7, // Convertir a AU
      eccentricity: 0.1, // Placeholder
      inclination: Math.random() * 30, // Placeholder
      meanMotion: 0.01 // Placeholder
    };
  }
</script>

<div class="simulation-container">
  <div class="simulation-header">
    <h4>🌌 Simulación Orbital 3D</h4>
    {#if selectedAsteroid}
      <p class="asteroid-name">{selectedAsteroid.name}</p>
    {:else}
      <p class="no-asteroid">Selecciona un asteroide para simular</p>
    {/if}
  </div>
  
  <div class="canvas-container">
    <canvas bind:this={canvas}></canvas>
  </div>
  
  <div class="simulation-controls">
    <button class="control-btn" on:click={toggleSimulation}>
      {isSimulating ? '⏸️ Pausar' : '▶️ Iniciar'}
    </button>
    <button class="control-btn" on:click={resetSimulation}>
      🔄 Reiniciar
    </button>
  </div>
  
  {#if selectedAsteroid}
    <div class="simulation-data">
      <div class="data-item">
        <span>Distancia de aproximación:</span>
        <span>{orbitalParams.asteroidDistance.toFixed(3)} AU</span>
      </div>
      <div class="data-item">
        <span>Diámetro estimado:</span>
        <span>{selectedAsteroid.estimated_diameter_max.toFixed(1)} m</span>
      </div>
      <div class="data-item">
        <span>Velocidad relativa:</span>
        <span>{Math.round(selectedAsteroid.relative_velocity).toLocaleString()} km/h</span>
      </div>
      <div class="data-item">
        <span>Estado de peligro:</span>
        <span style="color: {selectedAsteroid.is_potentially_hazardous ? '#ff4444' : '#4caf50'}">
          {selectedAsteroid.is_potentially_hazardous ? 'Peligroso' : 'Seguro'}
        </span>
      </div>
    </div>
  {/if}
</div>

<style>
  .simulation-container {
    width: 100%;
    height: 500px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .simulation-header {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .simulation-header h4 {
    color: #4caf50;
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }
  
  .asteroid-name {
    color: #fff;
    font-weight: 600;
    margin: 0;
  }
  
  .no-asteroid {
    color: rgba(255, 255, 255, 0.6);
    font-style: italic;
    margin: 0;
  }
  
  .canvas-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  canvas {
    width: 100%;
    height: 100%;
    display: block;
    cursor: grab;
  }
  
  canvas:active {
    cursor: grabbing;
  }
  
  .simulation-controls {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
  }
  
  .control-btn {
    background: rgba(76, 175, 80, 0.8);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }
  
  .control-btn:hover {
    background: rgba(76, 175, 80, 1);
    transform: translateY(-2px);
  }
  
  .simulation-data {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    padding: 0.8rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    font-size: 0.85rem;
  }
  
  .data-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  
  .data-item span:first-child {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .data-item span:last-child {
    color: #4caf50;
    font-weight: 600;
  }
</style>

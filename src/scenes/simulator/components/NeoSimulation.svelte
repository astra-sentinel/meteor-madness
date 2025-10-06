<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  let canvas;
  let scene, camera, renderer, controls;
  let animationId;
  
  // ===== Constantes =====
  const AU = 1.495978707e11;   // m
  const DEG = Math.PI/180;
  const scaleAU = 1;

  // ===== Hypnos (época JD 2460200.5) =====
  const EL_HYPNOS = { a_AU:2.844, e:0.6653, i:1.98*DEG, Omega:57.94*DEG, omega:238.17*DEG };
  
  // ===== Apophis (época JD 2460200.5) =====
  const EL_APOPHIS = {
    a_AU: 0.9227,
    e: 0.1914,
    i: 3.34 * DEG,
    Omega: 203.96 * DEG,
    omega: 126.6 * DEG
  };

  // ===== 6489 Golevka (época JD 2460200.5) =====
  const EL_GOLEVKA = {
    a_AU: 2.486,
    e: 0.6125,
    i: 2.27 * DEG,
    Omega: 209.47 * DEG,
    omega: 68.69 * DEG
  };

  // ===== Planetas (elementos medios ~J2000, para visualización) =====
  const PLANETS = [
    { name:'Mercury', color:0xc7c7c7, a_AU:0.387098, e:0.205630, i:7.00487*DEG, Omega:48.331*DEG,  omega:29.124*DEG },
    { name:'Venus',    color:0xe6c27a, a_AU:0.723332, e:0.006772, i:3.39471*DEG, Omega:76.680*DEG,  omega:54.884*DEG },
    { name:'Earth',   color:0x6db3ff, a_AU:1.000000, e:0.016710, i:0.00005*DEG, Omega:348.739*DEG, omega:102.947*DEG },
    { name:'Mars',    color:0xff6b57, a_AU:1.523679, e:0.093400, i:1.85000*DEG, Omega:49.558*DEG,  omega:286.502*DEG },
  ];

  const asteroids = [
    { name: 'Hypnos', el: EL_HYPNOS, color: 0xffffff, size: 0.025 },
    { name: 'Apophis', el: EL_APOPHIS, color: 0xff0000, size: 0.025 },
    { name: 'Golevka', el: EL_GOLEVKA, color: 0x1eff00, size: 0.025 }
  ];

  let planetMeshes = [];
  let asteroidMeshes = [];
  let time = 0;
  
  onMount(() => {
    initSimulation();
  });
  
  onDestroy(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    if (renderer) {
      renderer.dispose();
    }
    if (controls) {
      controls.dispose();
    }
    window.removeEventListener('resize', handleResize);
  });

  // ===== Kepler =====
  function solveE(M, e, tol=1e-12, maxIt=50) {
    let E = (e < 0.8) ? M : Math.PI;
    for(let k = 0; k < maxIt; k++) {
      const f = E - e * Math.sin(E) - M;
      const fp = 1 - e * Math.cos(E);
      const dE = -f / fp;
      E += dE;
      if (Math.abs(dE) < tol) break;
    }
    return E;
  }

  function buildOrbitGeometry(el, N=720) {
    const a = el.a_AU * AU, e = el.e;
    const pts = [];
    for(let k = 0; k < N; k++) {
      const M  = 2 * Math.PI * k / N;
      const E  = solveE(M, e);
      const r  = a * (1 - e * Math.cos(E));
      const nu = Math.atan2(Math.sqrt(1 - e * e) * Math.sin(E), Math.cos(E) - e);

      const x_p = r * Math.cos(nu), y_p = r * Math.sin(nu);

      const O = el.Omega, I = el.i || 0, w = el.omega;
      const cO = Math.cos(O), sO = Math.sin(O);
      const cI = Math.cos(I), sI = Math.sin(I);
      const cw = Math.cos(w), sw = Math.sin(w);

      const x = (cO * cw - sO * sw * cI) * x_p + (-cO * sw - sO * cw * cI) * y_p;
      const y = (sO * cw + cO * sw * cI) * x_p + (-sO * sw + cO * cw * cI) * y_p;
      const z = (sw * sI) * x_p + (cw * sI) * y_p;

      pts.push(new THREE.Vector3(x / AU / scaleAU, y / AU / scaleAU, z / AU / scaleAU));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }

  function calcPosition(el, M) {
    const a = el.a_AU * AU, e = el.e;
    const E  = solveE(M, e);
    const r  = a * (1 - e * Math.cos(E));
    const nu = Math.atan2(Math.sqrt(1 - e * e) * Math.sin(E), Math.cos(E) - e);

    const x_p = r * Math.cos(nu), y_p = r * Math.sin(nu);

    const O = el.Omega, I = el.i || 0, w = el.omega;
    const cO = Math.cos(O), sO = Math.sin(O);
    const cI = Math.cos(I), sI = Math.sin(I);
    const cw = Math.cos(w), sw = Math.sin(w);

    const x = (cO * cw - sO * sw * cI) * x_p + (-cO * sw - sO * cw * cI) * y_p;
    const y = (sO * cw + cO * sw * cI) * x_p + (-sO * sw + cO * cw * cI) * y_p;
    const z = (sw * sI) * x_p + (cw * sI) * y_p;

    return new THREE.Vector3(x / AU / scaleAU, y / AU / scaleAU, z / AU / scaleAU);
  }

  function initSimulation() {
    // ===== Escena =====
    renderer = new THREE.WebGLRenderer({canvas, antialias:true});
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.0001, 1e9);
    camera.position.set(0, 2.5, 6);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const sunLight = new THREE.PointLight(0xffffff, 2);
    scene.add(sunLight);

    // Sol
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 24, 16),
      new THREE.MeshBasicMaterial({color: 0xffcc66})
    );
    scene.add(sun);

    // Órbitas de asteroides
    // Hypnos
    {
      const g = buildOrbitGeometry(EL_HYPNOS, 960);
      const m = new THREE.LineBasicMaterial({ color: 0xffffff, transparent:true, opacity:0.95 });
      scene.add(new THREE.LineLoop(g, m));
    }
    // Órbita de Apophis
    {
      const g = buildOrbitGeometry(EL_APOPHIS, 960);
      const m = new THREE.LineBasicMaterial({ color: 0xff0000, transparent:true, opacity:0.95 });
      scene.add(new THREE.LineLoop(g, m));
    }
    // Órbita de Golevka
    {
      const g = buildOrbitGeometry(EL_GOLEVKA, 960);
      const m = new THREE.LineBasicMaterial({ color: 0x1eff00, transparent:true, opacity:0.95 });
      scene.add(new THREE.LineLoop(g, m));
    }
    // Planetas
    for(const p of PLANETS) {
      const g = buildOrbitGeometry(p, 720);
      const m = new THREE.LineBasicMaterial({ color: p.color, transparent:true, opacity:0.9 });
      scene.add(new THREE.LineLoop(g, m));
    }

    // ===== Crear esferas para los planetas =====
    planetMeshes = [];
    for (const p of PLANETS) {
      const geometry = new THREE.SphereGeometry(0.03, 16, 16);
      const material = new THREE.MeshStandardMaterial({ color: p.color });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      planetMeshes.push({ mesh, el: p, M0: Math.random() * 2 * Math.PI });
    }

    // ===== Crear esferas para los asteroides =====
    asteroidMeshes = [];
    for (const a of asteroids) {
      const geometry = new THREE.SphereGeometry(a.size, 12, 12);
      const material = new THREE.MeshStandardMaterial({ color: a.color });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      asteroidMeshes.push({ mesh, el: a.el, M0: Math.random() * 2 * Math.PI });
    }

    // Manejar resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Iniciar animación
    animate();
  }

  function handleResize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function animate() {
    animationId = requestAnimationFrame(animate);
    
    time += 0.002; // velocidad orbital visual

    // Actualizar posiciones de los planetas
    for (const obj of planetMeshes) {
      const M = obj.M0 + time / Math.pow(obj.el.a_AU, 1.5);
      const pos = calcPosition(obj.el, M % (2 * Math.PI));
      obj.mesh.position.copy(pos);
    }

    // Actualizar posiciones de los asteroides
    for (const obj of asteroidMeshes) {
      const M = obj.M0 + time / Math.pow(obj.el.a_AU, 1.5);
      const pos = calcPosition(obj.el, M % (2 * Math.PI));
      obj.mesh.position.copy(pos);
    }

    controls.update();
    renderer.render(scene, camera);
  }
</script>

<div class="simulation-container">
  <div class="simulation-header">
    <h4>Solar System - NEO Asteroids</h4>
  </div>
  
  <div class="canvas-container">
    <canvas bind:this={canvas}></canvas>
  </div>
</div>

<style>
  .simulation-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
  
  .simulation-header {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.7);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
  
  .simulation-header h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }
  
  .canvas-container {
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  
  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
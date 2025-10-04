<script>
  import { currentScene, SCENES } from './lib/stores.js';
  import Intro from './scenes/intro/Intro.svelte';
  import Simulator from './scenes/simulator/Simulator.svelte';
  import Mission from './scenes/mission/Mission.svelte';
</script>

<main>
  <h1>Meteor Madness</h1>
  
  <!-- Renderizado condicional de escenas -->
  {#if $currentScene === SCENES.INTRO}
    <Intro />
  {:else if $currentScene === SCENES.SIMULATOR}
    <Simulator />
  {:else if $currentScene === SCENES.MISSION}
    <Mission />
  {/if}
</main>

<style>
  main {
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 2rem;
  }
</style>

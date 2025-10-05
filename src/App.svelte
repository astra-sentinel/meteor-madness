<script>
  import { currentScene, SCENES } from './lib/stores.js';
  import Intro from './scenes/intro/Intro.svelte';
  import Simulator from './scenes/simulator/Simulator.svelte';
  import Mission from './scenes/mission/Mission.svelte';
</script>

<main>
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
</style>

import { writable } from 'svelte/store';

// Posibles escenas de la aplicación
export const SCENES = {
  INTRO: 'intro',
  SIMULATOR: 'simulator', 
  MISSION: 'mission'
};

// Store para la escena actual - inicia en la introducción
export const currentScene = writable(SCENES.INTRO);

// Función helper para cambiar de escena
export function setScene(scene) {
  currentScene.set(scene);
}
import { writable } from 'svelte/store';

// Posibles escenas de la aplicación
export const SCENES = {
  INTRO: 'intro',
  SIMULATOR: 'simulator', 
  MISSION: 'mission'
};

// Store para la escena actual - inicia en la introducción
export const currentScene = writable(SCENES.INTRO);

// Store para el nombre del usuario
export const userName = writable('');

// Función helper para cambiar de escena
export function setScene(scene) {
  currentScene.set(scene);
}

// Función helper para guardar el nombre del usuario
export function setUserName(name) {
  userName.set(name);
}

// Función helper para limpiar el nombre del usuario
export function clearUserName() {
  userName.set('');
}

// Función helper para reiniciar la aplicación
export function resetApp() {
  userName.set('');
  currentScene.set(SCENES.INTRO);
}
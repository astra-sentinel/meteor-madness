import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss()
  ],
  base: '/meteor-madness/', // Configura la base path para GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Genera sourcemaps para debug (opcional)
    sourcemap: false,
  }
})

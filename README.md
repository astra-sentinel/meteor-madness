# 🌌 Meteor Madness

Una aplicación web interactiva desarrollada con Svelte que simula la defensa de la Tierra contra meteoritos.

## 🚀 Estructura del proyecto

- **Rama `dev`**: Código fuente de Svelte (desarrollo)
- **Rama `main`**: Build compilado para GitHub Pages (producción)

## 🛠️ Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo local
```bash
npm run dev
```

### Build para producción
```bash
npm run build
```

## 📦 Deploy a GitHub Pages

### Método automático
```bash
./deploy.sh
```

### Método manual
1. Desde la rama `dev`, ejecuta: `npm run build`
2. Copia todos los archivos de `dist/`
3. Cambia a la rama `main`: `git checkout main`
4. Pega los archivos en la raíz
5. Commit y push: `git add . && git commit -m "Deploy: Update build" && git push origin main`

## 🎮 Características

- **SPA sin rutas**: Todo ocurre en una sola página
- **Estado global**: Manejo de escenas con Svelte stores
- **3 escenas interactivas**:
  - 🌌 Introducción
  - 🛰️ Simulador 
  - 🎯 Estrategia

## 💻 Tecnologías utilizadas

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```

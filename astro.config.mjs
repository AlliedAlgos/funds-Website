import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  site: 'https://funds.alliedalgos.org',
  
  // Static output for maximum speed
  output: 'static',
  
  // Keeping the node adapter for build-time compatibility

  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['pocketbase'],
    },
  },
});
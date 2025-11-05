import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configurato per GitHub Pages: GianmarcoLugaresi/Somnium
// Per dominio custom o Vercel: cambia base a '/'
export default defineConfig({
  plugins: [react()],
  base: '/Somnium/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})

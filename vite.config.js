import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path для GitHub Pages (репозиторий: stroyka)
  // Для Vercel/Netlify замените на: base: '/'
  base: '/stroyka/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})


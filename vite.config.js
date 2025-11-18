import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path для GitHub Pages (репозиторий: stroyka)
  // Для локальной разработки замените на: base: '/'
  // Для Vercel/Netlify используйте: base: '/'
  base: '/stroyka/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})


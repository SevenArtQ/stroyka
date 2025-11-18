import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path для GitHub Pages (репозиторий: stroyka)
<<<<<<< HEAD
  // Для локальной разработки замените на: base: '/'
  // Для Vercel/Netlify используйте: base: '/'
=======
  // Для Vercel/Netlify замените на: base: '/'
>>>>>>> b9f14b405196c133c46637f6814c3095e64563a6
  base: '/stroyka/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/static/',
  build: {
    outDir: path.resolve(__dirname, '../staticfiles/dist'),
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/contact': 'http://localhost:8000',
    }
  }
})
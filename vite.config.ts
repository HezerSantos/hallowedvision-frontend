import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    minify: false,
    sourcemap: true,
  },
  server: {
    allowedHosts: ['fae5-75-48-60-225.ngrok-free.app'],
    port: 5173,
    host: '0.0.0.0'
  },

})
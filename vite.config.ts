import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    minify: 'esbuild',
    sourcemap: true,
  },
  server: {
    allowedHosts: [''],
    port: 5173,
    host: '0.0.0.0'
  },

})
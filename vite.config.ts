import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: false,
      format: {
        comments: false
      }
    }
  },
  server: {
    allowedHosts: ['fae5-75-48-60-225.ngrok-free.app'],
    port: 5173,
    host: '0.0.0.0'
  }
})

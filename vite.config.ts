import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // Skip Terser minification, as javascript-obfuscator will handle that
    sourcemap: false, // Disable sourcemaps for security
  },
  server: {
    allowedHosts: ["73d773fa6ab8.ngrok-free.app"],
    port: 5173,
    host: '0.0.0.0'
  }
})

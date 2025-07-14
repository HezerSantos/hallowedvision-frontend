import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true, // Skip Terser minification, as javascript-obfuscator will handle that
    sourcemap: false, // Disable sourcemaps for security
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'axios', '@react-three/drei', '@react-three/fiber', 'react-icons'],
        },
      },
    },
  },
  server: {
    allowedHosts: ['73d773fa6ab8.ngrok-free.app'],
    port: 5173,
    host: '0.0.0.0'
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts: [
      // Permite todos los subdominios de ngrok
      '7a802c8f50b0.ngrok-free.app'
    ]

  }
})

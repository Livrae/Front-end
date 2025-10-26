import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // aceita conexões externas (0.0.0.0)
    port: 3001,
    hmr: {
      protocol: 'wss', // força websocket seguro — necessário para túneis HTTPS
      clientPort: 443  // força o cliente a conectar na porta 443 (útil para proxies/túneis)
    }
  }
})
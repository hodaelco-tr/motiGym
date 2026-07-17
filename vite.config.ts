import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages project site: https://hodaelco-tr.github.io/motiGym/
  base: process.env.GITHUB_PAGES === 'true' ? '/motiGym/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      Pragma: 'no-cache',
      Expires: '0',
    },
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Enable minification with esbuild (default)
    minify: true,
    // Rollup options for better tree shaking
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          inscroll: ['react-inscroll'],
          icons: ['lucide-react']
        }
      }
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize CSS
    cssMinify: true,
    // Compression
    reportCompressedSize: true,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500
  },
  // Preview configuration
  preview: {
    port: 3000,
    strictPort: true
  },
  // Development server configuration
  server: {
    port: 5173,
    strictPort: true,
    open: true
  }
})

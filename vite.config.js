import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import { fileURLToPath } from 'url'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@mock-data': path.resolve(__dirname, './src/mock-data'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@api' : path.resolve(__dirname, './src/api'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.js'],
    testMatch: ['./test/**/*.test.jsx'],
    globals: true,
  }
})

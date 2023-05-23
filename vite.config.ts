import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: loadEnv('', process.cwd()).VITE_APP_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})


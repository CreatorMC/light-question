import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    legacy({
      targets: ['Chrome 64'],
      modernPolyfills: true
    }),
  ],
  base:'./',
  build: {
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://127.0.0.1:8080/api',
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})

import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), Unocss()],
  server: {
    port: 3000,
  },
})

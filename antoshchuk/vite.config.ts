import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import consolePlugin from './src/plugins/console.plugin'


export default defineConfig({
  plugins: [
    vue(),
    consolePlugin()
  ]
})

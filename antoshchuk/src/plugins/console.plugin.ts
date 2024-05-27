import { Plugin } from "vite"

export const consolePlugin = (): Plugin => ({
  name: 'console-plugin',
  configResolved(config) {
    console.log('plugin installed', config)
  }
})

export default consolePlugin
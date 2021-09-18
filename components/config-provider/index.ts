import type { App } from 'vue'
import ConfigProvider from './config-provider.vue'

export type { ConfigProviderProps } from './config-provider.vue'

ConfigProvider.install = (app: App) => {
  app.component('SConfigProvider', ConfigProvider)
}

export default ConfigProvider

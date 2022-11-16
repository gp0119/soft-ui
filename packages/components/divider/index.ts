import type { App } from 'vue'

import Divider from './divider.vue'

export type { DividerProps } from './divider.vue'

Divider.install = (app: App) => {
  app.component('SDivider', Divider)
}

export default Divider

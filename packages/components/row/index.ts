import Row from './row.vue'
import type { App } from 'vue'

export type { RowProps } from './row.vue'

Row.install = (app: App) => {
  app.component('SRow', Row)
}

export default Row

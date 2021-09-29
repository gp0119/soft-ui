import Col from './col.vue'
import type { App } from 'vue'

export type { ColProps } from './col.vue'

Col.install = (app: App) => {
  app.component('SCol', Col)
}

export default Col

import type { App } from 'vue'
import Icon from './icon.vue'

export type { IconType } from './icon.vue'

Icon.install = (app: App) => {
  app.component('SIcon', Icon)
}

export default Icon

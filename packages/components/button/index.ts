import type { App } from 'vue'
import Button from './src/button.vue'

export type { ButtonProps } from './src/button.vue'

Button.install = (app: App) => {
  app.component('SButton', Button)
}

export default Button

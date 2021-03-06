import type { App } from 'vue'
import Button from './button.vue'

export type { ButtonProps } from './button.vue'

Button.install = (app: App) => {
  app.component('SButton', Button)
}

export default Button

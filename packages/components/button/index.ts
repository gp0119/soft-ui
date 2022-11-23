import type { App } from 'vue'
import Button from './src/button'

export type { buttonProps } from './src/buttonTypes'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button

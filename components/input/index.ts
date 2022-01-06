import type { App } from 'vue'
import Input from './input.vue'

export type { InputProps } from './input.vue'

Input.install = (app: App) => {
  app.component('SInput', Input)
}

export default Input

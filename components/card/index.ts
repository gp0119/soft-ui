import type { App } from 'vue'
import Card from './card.vue'

export type { CardProps } from './card.vue'

Card.install = (app: App) => {
  app.component('SCard', Card)
}

export default Card

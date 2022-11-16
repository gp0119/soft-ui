import type { App } from 'vue'
import * as components from './components'
import './style.less'

export const install = (app: App): App => {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    if (component.install) {
      app.use(component)
    }
  })
  return app
}

export * from './components'

export default {
  install,
}

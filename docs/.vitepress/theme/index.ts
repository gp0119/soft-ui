import VPApp from './components/vp-app.vue'
import './style/index.scss'
import 'uno.css'
import '@soft-ui/theme/index.scss'
import SoftUI from '@soft-ui/components'

export default {
  Layout: VPApp,
  // this is a Vue 3 functional component
  NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {
    app.use(SoftUI)
  },
}

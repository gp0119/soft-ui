import type { App } from 'vue'
import Layout from './layout.vue'
import Footer from './footer.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Main from './main.vue'

Layout.install = (app: App) => {
  app.component('SLayout', Layout)
  app.component('SHeader', Header)
  app.component('SFooter', Footer)
  app.component('SSider', Sider)
  app.component('SMain', Main)
}

Layout.Footer = Footer
Layout.Header = Header
Layout.Sider = Sider
Layout.Main = Main

export default Layout

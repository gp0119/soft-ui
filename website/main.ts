import { createApp } from 'vue'
import App from './App.vue'
import SoftUi from '/~/index'
import '/~/style.less'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/icon',
    component: () => import('./components/icon.vue'),
  },
  {
    path: '/button',
    component: () => import('./components/button.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(SoftUi).use(router).mount('#app')

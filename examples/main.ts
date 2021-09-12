import { createApp } from 'vue'
import App from './App.vue'
import '/~/style.less'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/button',
    component: () => import('./demos/button.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

export type RouteMeta = {
  hidden?: boolean
  title?: string
}
export type AppRouteRecordRaw = Omit<RouteRecordRaw, 'meta'> & {
  meta: RouteMeta
}
const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/getting-started',
    meta: {
      hidden: true,
    },
  },
  {
    path: '/getting-started',
    component: () => import('./views/getting-started.vue'),
    meta: {
      title: '快速上手',
    },
  },
  {
    path: '/icon',
    component: () => import('./components/icon.vue'),
    meta: {
      title: 'icon',
    },
  },
  {
    path: '/button',
    component: () => import('./components/button.vue'),
    meta: {
      title: 'button',
    },
  },
  {
    path: '/card',
    component: () => import('./components/card.vue'),
    meta: {
      title: 'card',
    },
  },
  {
    path: '/layout',
    component: () => import('./components/layout.vue'),
    meta: {
      title: 'layout',
    },
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes as unknown as RouteRecordRaw[],
})

export default router

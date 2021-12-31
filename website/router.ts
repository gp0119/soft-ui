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
    name: 'getting-started',
    component: () => import('./views/getting-started.vue'),
    meta: {
      title: '快速上手',
    },
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('./components/button.vue'),
    meta: {
      title: 'Button 按钮',
    },
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('./components/grid.vue'),
    meta: {
      title: 'Grid 布局',
    },
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('./components/icon.vue'),
    meta: {
      title: 'Icon 图标',
    },
  },
  {
    path: '/divider',
    name: 'divider',
    component: () => import('./components/divider.vue'),
    meta: {
      title: 'divider 分割线',
    },
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('./components/layout.vue'),
    meta: {
      title: 'Layout 容器',
    },
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('./components/card.vue'),
    meta: {
      title: 'Card 卡片',
    },
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes as unknown as RouteRecordRaw[],
})

export default router

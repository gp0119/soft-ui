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
    path: '/basic',
    component: () => import('./layout/content.vue'),
    meta: {
      title: 'Basic 基础组件',
    },
    children: [
      {
        path: 'button',
        component: () => import('./components/button.vue'),
        meta: {
          title: 'button 按钮',
        },
      },
      {
        path: 'grid',
        component: () => import('./components/grid.vue'),
        meta: {
          title: 'grid 布局',
        },
      },
      {
        path: 'icon',
        component: () => import('./components/icon.vue'),
        meta: {
          title: 'icon 图标',
        },
      },
      {
        path: 'layout',
        component: () => import('./components/layout.vue'),
        meta: {
          title: 'layout 容器',
        },
      },
    ],
  },
  {
    path: '/data',
    component: () => import('./layout/content.vue'),
    meta: {
      title: '数据展示',
    },
    children: [
      {
        path: 'card',
        component: () => import('./components/card.vue'),
        meta: {
          title: 'card 卡片',
        },
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes as unknown as RouteRecordRaw[],
})

export default router

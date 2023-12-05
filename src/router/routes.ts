import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/gradient-border',
  },
  {
    path: '/gradient-border',
    name: 'GradientBorder',
    component: () => import('@/pages/gradient-border/index.vue'),
  },
  {
    path: '/slide-animation',
    name: 'SlideAnimation',
    component: () => import('@/pages/slide-animation/index.vue'),
  },
  {
    path: '/svg-animation',
    name: 'SVGAnimation',
    component: () => import('@/pages/svg-animation/index.vue'),
  },
]

export default routes

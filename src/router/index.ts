import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'StudentsView',
    component: () => import('@/views/StudentsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

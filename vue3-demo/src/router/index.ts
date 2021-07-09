import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import LogicReuse from '../views/LogicReuse.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LogicReuse',
    name: 'LogicReuse',
    component: LogicReuse
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

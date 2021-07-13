import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import LogicReuse from '../views/LogicReuse.vue'
import LifeCycle from '../views/LifeCycle.vue'
import ReactivityTest from '../views/ReactivityTest/ReactivityTest.vue'

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
  },
  {
    path: '/ReactivityTest',
    name: 'ReactivityTest',
    component: ReactivityTest
  },
  {
    path: '/LifeCycle',
    name: 'LifeCycle',
    component: LifeCycle
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

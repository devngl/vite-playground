import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Suspend from '../views/Suspend.vue'
import MultipleModels from '../views/MultipleModels.vue'

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/suspend',
      component: Suspend
    },
    {
      path: '/multiple-models',
      component: MultipleModels,
    }
  ],
})

export default router
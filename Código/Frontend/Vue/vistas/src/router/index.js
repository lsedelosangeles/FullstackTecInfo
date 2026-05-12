import Inicio from '@/views/Inicio.vue'
import Primera from '@/views/Primera.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:Inicio,
      name:'inicio'
    },
    {
      path:'/primera',
      component: Primera,
      name:'primera'
    }
  ],
})

export default router

import Inicio from '@/views/Inicio.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:Inicio,
      name:'inicio'
    }
  ],
})

export default router

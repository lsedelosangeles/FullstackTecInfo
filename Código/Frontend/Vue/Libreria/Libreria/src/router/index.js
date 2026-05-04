import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '@/views/Inicio.vue'
import Listado from '@/views/Listado.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:Inicio,
      name:'inicio'
    },
    {
      path:"/listado",
      component:Listado,
      name:'listado'
    }
  ],
})

export default router

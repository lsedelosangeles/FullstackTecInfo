import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Segunda from '@/views/Segunda.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/" ,
      component:Inicio ,
      name:'inicio'
    },
    {
      path:"/segunda" ,
      component:Segunda ,
      name: 'segunda'
    }
  ],
})

export default router

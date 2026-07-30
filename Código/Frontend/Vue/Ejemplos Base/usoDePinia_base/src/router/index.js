import Inicio from '@/views/Inicio.vue'
import ListadoNotas from '@/views/ListadoNotas.vue'
import NuevaNota from '@/views/NuevaNota.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Inicio,
      name:'inicio'
    },
    {
      path:'/notas',
      component:ListadoNotas,
      name:'listadoNotas'
    },
    {
      path:'/notas/nueva',
      component:NuevaNota,
      name:'nueva'
    }
  ],
})

export default router

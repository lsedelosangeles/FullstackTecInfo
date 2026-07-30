import Inicio from '@/views/Inicio.vue'
import Login from '@/views/Login.vue'
import Registro from '@/views/Registro.vue'
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
      path:"/login",
      component:Login,
      name:'login'
    },
    {
      path:"/registro",
      component:Registro,
      name:'registro'
    }
  ],
})

export default router

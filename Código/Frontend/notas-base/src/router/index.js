import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '../views/Inicio.vue'
import VerNota from '../views/VerNota.vue'
import InicioSesion from '../views/InicioSesion.vue'
import Registro from '../views/Registro.vue'
import Verificar from '../views/Verificar.vue'

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path:"/",
                component: Inicio,
                name: 'main'
            },
            {
                path: "/notas",
                component: Inicio,
                name: 'inicio'
            }, 
            {
                path: "/ingresar",
                component: InicioSesion,
                name: 'inicioSesion'
            },
            {
                path: "/registro",
                component: Registro,
                name: 'registro'
            },
            {
                path:"/nota/:id",
                component: VerNota,
                name: 'verNota'
            },
            //Agregado para pruebas con JWT
            {
                path:'/verificar',
                component:Verificar,
                name: 'verificar'
            }
            
        ]
    }
)


export default router
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import api from '@/services/api'

export const useAuthStore = defineStore(
    'auth',
    {
        //Estado reactivo del almacen
        state: () => ({
            usuario: null,
            loading: false,
            error: null,
        }),

        getters: {},

        actions: {
            async login(credenciales) {
                // 1. Obtenemos la cookie CSRF de Sanctum (petición requerida antes del login)
                await api.get('/sanctum/csrf-cookie')

                // 2. Hace la petición de login
                //await api.post('/api/login2', credenciales)
                await api.post('/login', credenciales)

                // 3. Obtiene los datos del usuario autenticado
                await this.obtenerUsuario()
            }
        },

        async obtenerUsuario() {
            try {
                const response = await api.get('/api/user')
                this.usuario = response.data
                console.log(this.usuario)
            } catch (error) {
                console.log(error)
                this.usuario = null
            }
        },

        async logout() {
            await api.post('/logout')
            this.usuario = null
        }
        
    }
    
)
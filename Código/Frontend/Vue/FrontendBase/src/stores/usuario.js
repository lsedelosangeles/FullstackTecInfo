import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsuarioStore = defineStore(
    'usuario',
    ()=>{
        const usuario=ref()

        const login = ()=>{}

        const logout = ()=>{}
    }
)
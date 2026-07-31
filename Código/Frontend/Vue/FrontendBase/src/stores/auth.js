import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import api from '@/services/api'

export const useAuthStore = defineStore(
    'auth',
    {
       state: () => ({
      //Estado reactivo del almacen
      usuario: null,
      loading: false,
      error: null,
    }),

    

    }
)
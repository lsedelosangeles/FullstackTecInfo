<script setup>
import { ref, reactive } from 'vue'
import Nota from '../components/Nota.vue'
import router from '../router'

import { useAlmacenNotas } from '../store/notas'
import { useAlmacenSesion } from '../store/sesion'

const almacenNotas = useAlmacenNotas()
const almacenSesion = useAlmacenSesion()

if (!almacenSesion.sesionIniciada) {
  router.push({ name: 'inicioSesion' })
} else {

}

//almacenSesion.chequearSesion()

almacenNotas.obtenerNotas()

</script>

<template>
  <div class="principal 
          w-[100vw] h-[80vh]
    ">
    <div class="blocDeNotas
            h-full
            flex justify-center">
      <Nota v-for="nota in almacenNotas.notas" :nota="nota" :key="nota.id">
      </Nota>

    </div>
  </div>
</template>

<style scoped></style>
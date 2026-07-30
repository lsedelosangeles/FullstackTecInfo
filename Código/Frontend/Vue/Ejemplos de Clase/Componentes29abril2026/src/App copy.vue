<script setup>
import { ref } from 'vue';
import Encabezado from './components/Encabezado.vue';
import Contenido from './components/Contenido.vue';
import Pie from './components/Pie.vue';

const dato = ref('Cualquier otra cosa')
const dato2 = ref('Mi nombre es Seba. Mucho gusto')
const dato3 = ref({
  'nombre': 'Seba',
  'edad': 42
})

const recibir = (dato) => {
  dato2.value = dato
}

const recibirMensaje = (mensaje) => {
  alert("Atención, Lean")
}

</script>

<template>
  <Encabezado @activar="recibir"></Encabezado>
  <Contenido :dato="dato" :contenido="dato2" :persona="dato3"></Contenido>
  <Pie></Pie>
</template>

<style scoped></style>

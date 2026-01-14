<script setup>
import { RouterView } from 'vue-router';
import { useAlmacenNotas } from './store/notas';
import Encabezado from './components/Encabezado.vue';
import Pie from './components/Pie.vue';

const almacenNotas = useAlmacenNotas()

</script>

<template>
  <Encabezado></Encabezado>

  <router-view></router-view>
  
  <Pie class="border-t border-t-black" :almacenNotas="almacenNotas"></Pie>
</template>

<style scoped></style>
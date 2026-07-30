<script setup>
import { RouterView } from 'vue-router';
import Encabezado from './components/Encabezado.vue';
import Pie from './components/Pie.vue';
</script>

<template>
  <encabezado class="sombra_1"></encabezado>
  <router-view class="contenido"></router-view>
  <pie></pie>
</template>

<style scoped>
.contenido {
  height: 85vh;
}
</style>
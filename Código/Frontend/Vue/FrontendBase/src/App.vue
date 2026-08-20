<script setup>
import { RouterView } from 'vue-router';
import Encabezado from './components/Interfaz/Encabezado.vue';
</script>

<template>
  <encabezado></encabezado>
  <router-view class="" ></router-view>
</template>

<style scoped>
  .inicio{
    height: 85vh;
  }
</style>

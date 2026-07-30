<script setup>
import { ref } from 'vue';

const dato = ref('hola')
</script>

<template>
    <h1>Segunda</h1>
    <router-link :to="{ name: 'inicio' }">
        <button>Ir a Inicio</button>
    </router-link>
    <input type="text" v-model="dato">
    <br>
    <h2>{{ dato }}</h2>

    <button>Ir a Siguiente</button>
</template>

<style scoped></style>
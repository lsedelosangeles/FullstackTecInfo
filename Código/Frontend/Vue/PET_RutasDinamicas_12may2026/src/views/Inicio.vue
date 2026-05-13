<script setup>
import { RouterLink } from 'vue-router';
import datos from '../assets/datos.json'

const lista_datos = datos.datos
</script>

<template>
    <h1>Datos</h1>
    <p v-for="dato in lista_datos" :key="dato.id">
        <router-link :to="{ name: 'dato', params: { id: dato.id } }">
            {{ dato.info }}
        </router-link>

    </p>
</template>

<style scoped></style>
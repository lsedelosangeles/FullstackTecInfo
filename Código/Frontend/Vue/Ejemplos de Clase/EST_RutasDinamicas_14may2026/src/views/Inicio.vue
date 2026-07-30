<script setup>
import datos from '../assets/datos.json'


</script>

<template>
    <h1>Datos:</h1>
    <p v-for="elemento in datos.elementos" :key="elemento.id">
        <router-link :to="{
            name: 'dato',
            params: { id: elemento.id }
        }">
            {{ elemento.info }}
        </router-link>

    </p>
</template>

<style scoped></style>
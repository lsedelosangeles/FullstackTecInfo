<script setup>
import { useNotasStore } from '@/stores/notas';

const almacenNotas = useNotasStore()
</script>

<template>
    <h1>Notas Registradas</h1>
    <ul>
        <li v-for="nota in almacenNotas.notas">
            <h3>{{ nota.id }} - {{ nota.titulo }}</h3>
            <p>{{ nota.texto }}</p>
        </li>
    </ul>
</template>

<style scoped></style>
<script setup>
import datos from '../assets/datos.json'
import { ref } from 'vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const parametros = useRoute().params
const id = parametros.id

const resultado = computed(
    () => {
        return datos.elementos.filter(
            elemento => elemento.id == id
        )[0]
    }
)
</script>

<template>
    <h1>{{ resultado.info }}</h1>
    <p>{{ resultado.id }}</p>
</template>

<style scoped></style>
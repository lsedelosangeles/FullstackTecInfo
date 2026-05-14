<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import datos from '../assets/datos.json'

const parametros = useRoute().params
const lista_datos = datos.datos

const filtro = computed(
    () => {
        return lista_datos.filter(
            item => item.id == parametros.id
        )
    }
)
</script>
<template>
    <h1>{{ filtro[0].info }}</h1>
    <p>{{ filtro[0].id }}</p>
</template>

<style scoped></style>
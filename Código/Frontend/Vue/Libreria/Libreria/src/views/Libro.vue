<script setup>
import { useRoute } from 'vue-router';
import libros from '../assets/libros.json'
import { computed } from 'vue';

const parametros = useRoute()
const isbn = parametros.params.isbn

const lista_libros = libros.libros

//Filtro: retorna un array con elementos
const filtro_libros = computed(() => {
    return lista_libros.filter(item => item.isbn === isbn)
})

const libro = filtro_libros.value[0]
</script>



<template>
    <router-link to="/listado">Volver</router-link>
    <div>
        <h1>{{ libro.titulo }}</h1>
        <h2>{{ libro.autor }}</h2>
        <p>{{ libro.isbn }}</p>
    </div>
</template>

<style scoped></style>
<script setup>
defineProps([
    'dato', 'contenido', 'persona'
])
</script>
<template>
    <div class="contenido">
        <h1>{{ dato }}</h1>
        <p>{{ contenido }}</p>
        <p>Nombre: {{ persona.nombre }}</p>
        <p>Edad: {{ persona.edad }}</p>
    </div>
</template>
<style scoped>
.contenido {
    position: relative;
    width: 100%;
    height: 80%;
    background-color: #0000FF;
    color: white;
}
</style>
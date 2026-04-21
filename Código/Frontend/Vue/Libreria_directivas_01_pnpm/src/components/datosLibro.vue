<template>
    <div class="datosLibro">
        <h3>Título: {{ libro.titulo }}</h3>
        <h4>Autor: {{ libro.autor }}</h4>
        <h4>Editorial: {{ libro.editorial }}</h4>
        <h5>Género: {{ libro.genero }}</h5>
    </div>
</template>

<script setup>
const libro = {
    "titulo": "A",
    "autor": "B",
    "editorial": "C",
    "genero": "D"
}
</script>

<style scoped>
.datosLibro {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    height: 20%;
    border-bottom: solid 1px black;
    margin-top: 20px;
}

.datosLibro h3 {
    grid-column: span 2;
    margin: 0;
}

.datosLibro h4,
.datosLibro h5 {
    margin: 0;
}
</style>
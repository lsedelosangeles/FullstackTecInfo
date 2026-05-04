<script setup>
import { ref } from 'vue';

const titulo = ref('')

const libro = ref({
    'titulo': '',
    'isbn': '',
    'autor': '',
    'editorial': '',
    'genero': '',
    'anio': 0,
    'precio_uyu': 0
})
</script>

<template>
    <div class="nuevoLibro">
        <div class="cerrar" @click="$emit('cerrar')"></div>
        <h2>Nuevo Libro: {{ libro.titulo }}</h2>
        <div class="formulario">
            <label for="isbn">ISBN:</label><input type="number" id="isbn" v-model="libro.isbn">

            <label for="titulo">Título:</label>
            <input type="text" id="titulo" v-model="libro.titulo">

            <label for="autor">Autor:</label><input type="text" id="autor" v-model="libro.autor">
            <label for="genero">Genero:</label><input type="text" id="genero" v-model="libro.genero">
            <label for="editorial">Editorial:</label><input type="text" id="editorial" v-model="libro.editorial">
            <label for="anio_publicacion">Año de Publicación:</label><input type="number" placeholder="YYYY" min="1900"
                max="2100" id="anio_publicacion" v-model="libro.anio">
            <label for="precio_uyu">Precio ($U):</label><input type="number" id="precio_uyu" min="0" placeholder="$U"
                v-model="libro.precio_uyu">
        </div>
        <div class="boton btnAgregarLibro" @click="$emit('guardar', libro)">Agregar Libro</div>
    </div>
</template>

<style scoped>
.nuevoLibro {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 60%;
    background-color: #fdfbdf;
    border-radius: 20px;
    border: 3px rgb(218, 153, 2) solid;

}

.nuevoLibro h2 {
    width: 100%;
    text-align: center;
}

.nuevoLibro .formulario {
    position: relative;
    width: 90%;
    left: 5%;
    display: grid;
    grid-template-columns: 35% 50%;
    column-gap: 5%;
    row-gap: 5px;
    font-size: 1.5em;
}

.nuevoLibro .formulario:nth-child(2n+1) {
    color: green;
    font-weight: bolder;
    text-align: left;
    text-indent: 10px;
}

.nuevoLibro .btnAgregarLibro {
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    width: 35%;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: rgb(218, 153, 2);
    border: 3px solid #49461c;
    border-radius: 20px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    align-items: center;
    justify-content: center;
}

.boton:hover {
    -webkit-box-shadow: 5px 5px 7px -1px #49461c;
    box-shadow: 5px 5px 7px -1px #49461c;
    cursor: pointer;
}

.boton:active {
    -webkit-box-shadow: 0px 0px 0px 0px #000000;
    box-shadow: 0px 0px 0px 0px #000000;
    cursor: pointer;
}

.cerrar {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: auto;
    right: 20px;
    top: 20px;
    width: 30px;
    aspect-ratio: 1/1;
    background-color: red;
    color: white;
    border: #690303 solid 2px;
    border-radius: 25px;
    font-weight: bolder;
}

.cerrar:hover {
    -webkit-box-shadow: 3px 3px 4px -1px #49461c;
    box-shadow: 3px 3px 4px -1px #49461c;
    cursor: pointer;
}

.cerrar::after {
    content: "x";
}
</style>
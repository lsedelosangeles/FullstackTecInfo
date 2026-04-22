<script setup>
const props = defineProps([
    'libro'
])

const randomColor = (() => {
    "use strict";

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return () => {
        var h = randomInt(0, 360);
        var s = randomInt(42, 98);
        var l = randomInt(40, 90);
        return `hsl(${h},${s}%,${l}%)`;
    };
})();

</script>

<template>
    <div class="datosLibro">
        <h2>{{ libro.titulo }}</h2>
        <h3>{{ libro.autor }}</h3>
        <h4>Editorial: {{ libro.editorial }}, {{ libro.anio_publicacion }}</h4>
        <h4>Género: {{ libro.genero }}</h4>
        <div class="portada" :style="'background-color:' + randomColor()"></div>
    </div>

</template>

<style>
.datosLibro {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    height: 25%;
    padding-bottom: 10px;
    border-bottom: solid 1px black;
}

.datosLibro h2 {
    margin-bottom: 10px;
    margin-top: 10px;
}

.datosLibro h3 {
    grid-column: span 2;
    margin: 0;
}

.datosLibro h4,
.datosLibro h5 {
    margin: 0;
}

.portada {
    width: 100px;
    height: 100px;
    position: absolute;
    left: auto;
    right: 10px;
    top: 30px;
}
</style>
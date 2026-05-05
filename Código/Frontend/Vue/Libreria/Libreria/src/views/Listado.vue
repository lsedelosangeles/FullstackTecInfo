<script setup>
import DatosLibro from '@/components/DatosLibro.vue';
import libros from '../assets/libros.json'

const lista_libros = libros.libros

</script>

<template>
    <div class="base">
        <div class="busqueda">
            <input type="text">
            <div class="btnBuscar"></div>
        </div>
        <div class="listado">
            <div>
                <DatosLibro v-for="libro in lista_libros" :key="libro.isbn" :libro="libro">
                </DatosLibro>
            </div>

        </div>
    </div>
</template>

<style scoped>
.busqueda {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 60%;

}

.busqueda>input {
    width: 90%;
    height: 70%;
    font-size: 1.8em;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--membrillo-gris);
}

.busqueda .btnBuscar {
    height: 70%;
    aspect-ratio: 1/1;
    background-image: url('img/lupa.png');
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center center;
}

.listado {
    height: 80%;
    width: 80%;
    /* background-color: #fdfbdf; */
    border-radius: 20px;
    /* border: 3px #49461c solid; */

    padding: 20px;
}

.listado>div {
    height: 95%;
    width: 100%;
    overflow-y: scroll;
}
</style>
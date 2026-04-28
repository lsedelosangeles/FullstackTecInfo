<script setup>
import { ref } from 'vue';
import DatosLibro from './components/DatosLibro.vue';
import NuevoLibro from './components/NuevoLibro.vue';

import libros from './assets/libros.json'

const lista_libros = libros.libros

const verTelon = ref(false)

const mostrarTelon = () => {
  verTelon.value = !(verTelon.value)
}

</script>

<template>
  <div class="telon" v-if="verTelon">
    <NuevoLibro @cerrar="mostrarTelon()"></NuevoLibro>
  </div>

  <div class="base">
    <div class="encabezado">
      <h1>Listado de Libros</h1>
      <div class="boton agregarLibro" @click="mostrarTelon()">
        +
      </div>
    </div>
    <div class="contenido">
      <div class="listado">
        <DatosLibro v-for="libro in lista_libros" :key="libro.isbn" :libro="libro">
        </DatosLibro>
      </div>
    </div>

  </div>
</template>

<style scoped>
.base {
  position: absolute;
  top: 0px;
  background-color: #f3e95f;
  width: 100%;
  height: 100%;
}

.encabezado {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 15%;
  border-bottom: solid 1px black;
}

.telon {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(50, 50, 50, 0.75);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contenido {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
}

.agregarLibro {
  height: 80%;
  aspect-ratio: 1/1;
  display: flex;
  background-color: rgb(218, 153, 2);
  border: 3px solid #49461c;
  border-radius: 20px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  align-items: center;
  justify-content: center;
}


.listado {
  height: 90%;
  width: 80%;
  background-color: #fdfbdf;
  border-radius: 20px;
  border: 3px #49461c solid;
  overflow-y: scroll;
  padding: 20px;
}

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

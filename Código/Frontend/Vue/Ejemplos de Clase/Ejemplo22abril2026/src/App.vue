<script setup>
import { ref } from 'vue';

const estado = ref(false)

const datos = [
  { 'a': 1, 'id': 0 },
  { 'a': 10, 'id': 1 },
  { 'a': 100, 'id': 2 },
  { 'a': 1000, 'id': 3 }
]

const dato = ref("")

const agregarDato = () => {
  let id = datos.length
  let nuevoDato = {
    'a': dato.value,
    'id': id
  }
  datos.push(nuevoDato)
  dato.value = ""
}
</script>

<template>

  <h1 class="uno">{{ dato }}</h1>

  <button @click="estado = !(estado)">Mostrar</button>
  <br>
  <label for="datoNuevo">Dato Nuevo:</label>
  <input v-model="dato" id="datoNuevo" type="text">
  <button @click="agregarDato()">Agregar</button>


  <p v-for="elemento in datos" :key="elemento.id">
  <div v-if="!(elemento.id == 2)">
    A: {{ elemento.a }} - ID: {{ elemento.id }}
  </div>
  </p>


</template>

<style scoped></style>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNotasStore } from '@/stores/notas';

const almacen = useNotasStore()
const router = useRouter()

const nota = ref({
    'titulo': '',
    'texto': ''
})

const guardarNota = (nuevaNota) => {
    almacen.nuevaNota(nuevaNota)
    router.push('/')
}
</script>

<template>
    <h1>Nueva Nota {{ almacen.siguienteId }}</h1>
    <label for="titulo">Titulo: </label>
    <input v-model="nota.titulo" type="text" id="titulo"><br>

    <label for="texto">Texto: </label>
    <input v-model="nota.texto" type="text" id="texto"><br>
    <br>
    <div class="botones">
        <div class="boton" @click="guardarNota(nota)">Agregar Nota</div>
        <router-link to="/">
            <div class="boton">Cancelar</div>
        </router-link>
    </div>
</template>

<style scoped>
a:link {
    text-decoration: none;
}

.botones {
    display: flex;
    flex-direction: row;
}

.boton {
    display: flex;
    width: 15vw;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 8vh;
    border-radius: 10px;
    background-color: slategray;
    color: white;
    margin-left: 10px;
    cursor: pointer;
}

.boton:hover {
    background-color: #555;
}

.boton:active {
    background-color: #111;
}
</style>
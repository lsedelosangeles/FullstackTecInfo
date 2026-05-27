<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Botonera from '@/components/Botonera.vue';

const notas = ref({
    'notas': []
})

const cant_notas = ref(
    notas.value.notas.length
)

</script>

<template>
    <h1>Notas</h1>
    <div class="cuadro">
        <p>Cantidad de notas registradas: {{ cant_notas }}</p>
    </div>
    <Botonera></Botonera>
    <div>
        <h2 v-if="cant_notas > 0">
            Últimas 5 notas:
        </h2>
        <h2 v-else>
            No hay notas para mostrar
        </h2>

        <ul>
            <li v-for="nota in notas.notas">

            </li>
        </ul>
    </div>
</template>

<style scoped></style>
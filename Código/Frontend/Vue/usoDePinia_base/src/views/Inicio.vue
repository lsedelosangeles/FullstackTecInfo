<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Botonera from '@/components/Botonera.vue';
import { useNotasStore } from '@/stores/notas';

const almacen = useNotasStore();

const ultimas5 = computed(
    () => {
        return almacen.notas.filter(
            nota => nota.id >= (almacen.notas.length - 5)
        )
    }
)

</script>

<template>
    <h1>Notas</h1>
    <div class="cuadro">
        <h2>Cantidad de notas registradas: {{ almacen.cantidad }}</h2>
    </div>
    <Botonera></Botonera>
    <div>
        <h2 v-if="almacen.cantidad > 0">
            Últimas 5 notas:
        </h2>
        <h2 v-else>
            No hay notas para mostrar
        </h2>

        <ul>
            <li v-for="(nota) in ultimas5" :key="nota.id">
                {{ nota.titulo }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
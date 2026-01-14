<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';
import { useAlmacenNotas } from '../store/notas';

const ruta = useRoute()
const almacenNotas = useAlmacenNotas()

/**
 * El uso de computed() permite manejar propiedades reactivas en un componente, de forma que
 * se detecte si el valor de esta propiedades cambia, y se vuelva a procesar el componente para
 * reflejar la nueva información disponible
 */
const nota = computed(
    () => {
        const idNota = ruta.params.id
        const notaBuscada = almacenNotas.notaPorID(idNota)
        return notaBuscada
    }
)

</script>

<template>
    <div class="base
            w-[100vw] h-[80vh]
            flex flex-col items-center justify-center
        ">
        <div class="botonera
                w-[90vw] h-[5vh]
            ">
            <router-link to="/">
                <div class="btnVolver
                    w-fit h-[30px]
                    px-3 py-1
                    rounded-2xl
                    text-center
                    bg-amber-400
                    hover:bg-amber-200 cursor-pointer
                    active:bg-amber-600
                ">
                    Todas las Notas
                </div>
            </router-link>

        </div>

        <div class="contenido
            w-[90vw] h-[70vh]
            p-6
            bg-amber-200
            rounded-2xl
            ">
            <h1 class="tituloPagina
                    font-bold text-2xl">
                Nota:
            </h1>
            <h2 class="tituloNota
                    font-bold text-3xl
                ">
                {{ nota.titulo }}
            </h2>

            <p class="textoNota
                    w-full h-8/10
                ">
                {{ nota.texto }}
            </p>
            <h3 class="notaFecha
                    w-full
                    text-xs text-right
                ">
                Agregada el {{ nota.fecha }}
            </h3>
        </div>
    </div>

</template>

<style scoped></style>

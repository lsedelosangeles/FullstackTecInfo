<script setup>
import { RouterLink } from 'vue-router'

defineProps([
    'nota'
    ])
</script>

<template>
    <div class="nota
            w-[200px] h-[260px]
            bg-amber-300
            mt-4 mx-2
            rounded-2xl
            p-3
            flex flex-col justify-between">
        <h2 class="titulo
            font-bold">

            <router-link :to="{
                name: 'verNota',
                params: { id: nota.id }
            }">
                {{ nota.titulo }}
            </router-link>
            
        </h2>
        <p class="texto
            text-justify overflow-x-clip">
            {{ nota.texto }}
        </p>
        <p class="fecha">
            {{ nota.fecha }}
        </p>
    </div>
</template>
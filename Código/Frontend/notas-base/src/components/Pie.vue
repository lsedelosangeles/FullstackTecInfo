<script setup>
defineProps([
    'almacenNotas'
]
)
</script>

<template >
    <p class="cantNotas">
        Notas: {{ almacenNotas.notas.length }}
    </p>
</template>
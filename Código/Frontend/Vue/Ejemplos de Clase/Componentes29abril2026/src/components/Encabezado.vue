<template>
    <div class="encabezado">
        <input type="text" id="cosa" v-model="cosa">
        <button @click="$emit('activar', cosa)">Activar</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const cosa = ref()
</script>
<style scoped>
.encabezado {
    position: relative;
    width: 100%;
    height: 15%;
    background-color: #ff00ff;
}
</style>
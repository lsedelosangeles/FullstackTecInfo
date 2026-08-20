<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';


</script>

<template>
    <div class="cabeza">
        <div class="relleno"></div>
        <div class="panel"></div>
    </div>


</template>

<style scoped>

.cabeza{
    width: 100vw;
    height: 15vh;
    border-bottom: 1px solid grey;
}

</style>
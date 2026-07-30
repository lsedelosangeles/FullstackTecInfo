<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="base">
        <div class="encabezado">
            <h1>Hola</h1>
        </div>
        <div class="botonera">
            <router-link class="boton boton-amarillo-claro-1" to="/login">
                Iniciar Sesión
            </router-link>
            
        <router-link class="boton boton-verde" to="/registro">
            Registrarse
        </router-link>
            
        </div>

    </div>
</template>

<style scoped>

.encabezado{
    height: 10vh;
}

.botonera {
    height: 10vh;
    display: flex;

}
</style>
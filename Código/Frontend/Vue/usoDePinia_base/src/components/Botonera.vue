<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="botones">
        <router-link to="/notas/nueva">
            <div class="boton">Agregar Nota</div>
        </router-link>
        <router-link to="/notas">
            <div class="boton">Ver Todas las Notas</div>
        </router-link>
        <div class="boton">Editar Nota</div>
        <div class="boton">Eliminar Nota</div>
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
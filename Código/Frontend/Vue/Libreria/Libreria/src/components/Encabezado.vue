<script setup></script>

<template>
    <div class="base">
        <div class="logo"></div>
        <div class="nombre">
            <p class="nombre fuente-logo">Tangerina Libros</p>
        </div>

    </div>
</template>

<style scoped>
.base {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    left: 0;
    width: 100vw;
    height: 10vh;
    background-color: var(--membrillo-amarillo-claro-2);

}

.logo {

    height: 95%;
    aspect-ratio: 1/1;
    background-image: url("/img/logo_libros.png");
    background-size: contain;
    margin: 0px 20px 0px 20px;
}

.nombre {
    font-size: 1.8em;
    color: var(--membrillo-fucsia);
}
</style>
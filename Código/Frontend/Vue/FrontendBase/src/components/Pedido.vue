<script setup>
defineProps([
    'pedido'
])


</script>

<template>

    <div class="caja">
        <h4>N°:{{ pedido.id }}</h4>
        <b>Fecha: </b>{{ pedido.created_at }}<br>
        <b>Estado:</b>{{ pedido.estado }}<br>
        <b>Descripción:</b>{{ pedido.descripcion }}<br>
    </div>


</template>

<style scoped>
.caja {
    width: 75vw;
    border-bottom: 1px solid grey;
}
</style>
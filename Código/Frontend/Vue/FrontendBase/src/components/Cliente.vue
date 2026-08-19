<script setup>
import Pedido from './Pedido.vue';


defineProps([
    'cliente', 'pedidos'
])

</script>

<template>

    <h2>{{ cliente.nombre }} {{ cliente.apellido }}</h2>
    <b>CI: </b>{{ cliente.ci }}<br>
    <b>Dirección: </b>{{ cliente.direccion }}<br>
    <br>
    <h3>Pedidos Realizados:</h3>
    <Pedido v-for="pedido in pedidos" :pedido="pedido"></Pedido>
    <hr>

</template>

<style scoped></style>
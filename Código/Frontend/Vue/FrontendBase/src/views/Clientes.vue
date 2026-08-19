<script setup>
import { ref, computed, onMounted } from 'vue';
import api from '@/services/api';
import Cliente from '@/components/Cliente.vue';

const clientes = ref([])
const cargando = ref(true)
const error = ref(null)

const verClientes = async () => {
    console.log("iniciando")
    cargando.value = true
    error.value = null

    try {
        await api.get('/sanctum/csrf-cookie')

        const respuesta = await api.get('/api/clientes')
        clientes.value = respuesta.data
        console.log(clientes.value)
        alert("OK")
    } catch (exc) {
        error.value = exc.response?.data?.message
        alert("ERROR") //OJITO CON ESTO COLEGA
        console.log("Error: " + error.value)
    }
    finally {
        cargando.value = false
    }
}

onMounted(
    () => {
        verClientes()
    }
)
</script>

<template>
    <div v-if="cargando">Esperando datos...</div>
    <div @click="verClientes()">Cargar</div>
    <Cliente v-for="cliente in clientes" :cliente="cliente" :pedidos="cliente.pedidos" :key="cliente.ci">
    </Cliente>

</template>

<style scoped></style>
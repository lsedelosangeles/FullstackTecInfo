<script setup>
import instanciaAxios from '../services/api';

const enviarDatos = async ()=>{

        try {
            const respuesta = await instanciaAxios.get('cookie')
            console.log("RESPUESTA -->") 
            console.log(respuesta.data)
            alert("El servidor dice: " + respuesta.data)
            //let destino = respuesta.data.destino
            //router.push(destino)

        } catch (error) {
            console.error("ERROR --> ")
            console.error(error)
            console.error(error.response.data)
        }
    }

    enviarDatos()

</script>

<template>
    <div>
        
    </div>
</template>

<style scoped>
    
</style>
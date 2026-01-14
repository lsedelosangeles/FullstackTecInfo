<script setup>
import { ref, reactive } from 'vue'
import { useAlmacenNotas } from '../store/notas'
import { useAlmacenSesion } from '../store/sesion'

const verTelon = ref(false)

//Inicialización de los almacenes de datos
const almacenNotas = useAlmacenNotas()
const almacenSesion = useAlmacenSesion()

const notas = almacenNotas.notas

const nuevaNota = reactive({
    titulo: "",
    texto: ""
})

const verCuadrousuario = ref(false)

const agregarNota = () => {

    console.log("agregando....")
    almacenNotas.agregarNota(nuevaNota)

    //alert("La nota se guardó con éxito")
    console.log(almacenNotas.notas)
    verTelon.value = false
    nuevaNota.titulo = ""
    nuevaNota.texto = ""
}
</script>

<template>
    <div v-if="verTelon" class="telon 
        absolute 
        w-full h-full 
        bg-black/50 
        z-10
        flex
        justify-center
      items-center
      ">

        <div class="nuevaNota
          w-1/3 h-1/3
          bg-green-300
          rounded-2xl
          p-4
          flex flex-col justify-center">
            <input v-model="nuevaNota.titulo" type="text" class="titulo bg-white">
            </input>
            <textarea v-model="nuevaNota.texto" rows="3" class="texto
            mt-1
            bg-white">

      </textarea>
            <button @click="agregarNota()" class="btnAgregarNota
                bg-green-700
                text-white
                hover:bg-green-500
                active:g-green-500
                active:g-green-500
                active:bg-green-300
                m-2
                rounded-2xl">
                Agregar Nota</button>
            <button @click="verTelon = false" class="btnCancelar
                bg-red-700
                text-white
                hover:bg-red-500
                active:bg-red-300
                m-2
                rounded-2xl">
                Cancelar
            </button>
        </div>
    </div>
    <div class="barra 
          flex justify-between 
          p-5 h-[15vh]
          border-b-black border-b-1">
        <h1 class="text-3xl font-bold">Notas</h1>

        <div v-if="almacenSesion.sesionIniciada" class="zonaUsuario
                h-full w-[30vh]
                flex justify-between
                ">

            <label for="controlMenu">
                <div class="usuario
                    h-full aspect-square
                    bg-contain bg-[url(/img/user.png)] 
                    hover:border-black hover:border-4 rounded-4xl
                    ">
                </div>
            </label>

            <input type="checkbox" id="controlMenu" class="hidden">
            <div class="menuUsuario hidden
                    absolute top-[12vh]
                    h-[15vh] w-[30vh]
                    border-black border-2 rounded-2xl
                    bg-white
                    ">
                <p class="nombreUsuario
                    relative left-2
                    text-[3vh] font-bold">
                    {{ almacenSesion.usuario.name }}
                </p>
                <p class="nombreUsuario
                    relative left-2 top-[-1vh]
                    text-[2vh]">
                    {{ almacenSesion.usuario.email }}
                </p>
                <p @click="almacenSesion.cerrarSesion()" class="cerrarSesion
                    w-full
                    text-center
                    hover:font-bold
                    ">
                    Cerrar Sesión
                </p>
            </div>


            <button @click="verTelon = true" class="
                h-[60px]
                aspect-square
                rounded-4xl
                flex items-center justify-center
                bg-blue-950 text-white
                text-3xl
                hover:bg-blue-500
                active:bg-blue-300
                ">
                +
            </button>
        </div>


    </div>
    <button @click="almacenSesion.chequearSesion()">probar</button>
</template>

<style scoped>
#controlMenu:checked+.menuUsuario {
    display: block;
}
</style>
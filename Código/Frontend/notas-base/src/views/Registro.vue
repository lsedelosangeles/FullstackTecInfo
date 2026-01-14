<script setup>
    import { ref ,reactive} from 'vue';
    import router from '../router';
    import instanciaAxios from '../services/api';

    const nombreUsuario = ref('')
    const email = ref('')
    const password = ref('')
    const password_confirmation = ref('')

    const errores =  reactive({})

    const enviarDatos = async ()=>{
        const nUsuario = {
            name:nombreUsuario.value,
            email:email.value,
            password:password.value,
            password_confirmation:password_confirmation.value
        }

        try {
            await instanciaAxios.axiosCSRF.get('')
            const respuesta = await instanciaAxios.axiosBase.post('usuarios/nuevo', nUsuario)
            console.log("RESPUESTA -->") 
            console.log(respuesta.data)
            alert("El servidor dice: " + respuesta.data.estado + "\n" + respuesta.data.mensaje)
            let destino = respuesta.data.destino
            router.push({name: destino})
        } catch (error) {
            
            //console.error(error)
            console.error(error.response.data.errors)
            errores.e = error.response.data.errors
            if (errores.email) {
                
            }
        }
    }

</script>

<template>
    <div class="base 
        w-[100vw] h-[80vh]
        bg-amber-300
        flex justify-center items-center  
        ">
        <div class="contenido
                w-2/5 h-4/5
                bg-green-300
                rounded-3xl
                p-2
                flex flex-col items-center
                text-center
            ">
            <h1 class="titulo
                    text-4xl font-bold
                ">
                Registrarse en el Sistema
            </h1>
            <br>
            <form @submit.prevent="enviarDatos" class="formRegistro
                                    relative top-10
                                    w-4/5
                                    grid grid-cols-2 grid-rows-4 gap-1
                                    text-left      
                ">
                <label for="nombreUsuario">Nombre de usuario:</label>
                <input type="text" id="nombreUsuario" v-model="nombreUsuario">

                <label for="email">Email:</label>
                <div class="
                        w-full
                ">
                    <input type="text" id="email" v-model="email" 
                        class="w-full"
                    >
                    <p class="error">Probando...</p>
                </div>
                

                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required>

                <label for="password_confirmation">Confirmar Contraseña:</label>
                <input type="password" id="password_confirmation" v-model="password_confirmation" required>
                <p class="h-4"></p>
                <button class="btnRegistro
                            col-span-2
                            bg-amber-50
                    ">
                    Crear Usuario
                </button>
            </form>
        </div>
        
    </div>
</template>

<style scoped>
    .formRegistro input{
        margin-left: 20px;
        background-color: white;
    }

    .error {
        color: red;
        font-size: small;
        font-weight: bold;
        background-color: pink;
    }
    
</style>

<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuthStore()

const datosFormulario = reactive({
    email: '',
    password: ''
})

const cargando = ref(false)
const mensajeError = ref('')
const errores = ref({})

const hacerLogin = async () => {
    cargando.value = true
    mensajeError.value = null
    errores.value = {}

    try {
        await authStore.login(datosFormulario)
        alert('Login OK')
        //router.push()
    } catch (error) {
        if (error.response?.status === 422) {
            // Errores de validación de campos (p. ej. credenciales incorrectas o formato inválido)
            errores.value = error.response.data.errors || {}
            mensajeError.value = error.response.data.message || 'Por favor verifica los datos ingresados.'
        } else if (error.response?.status === 401) {
            mensajeError.value = 'Credenciales inválidas.'
        } else {
            mensajeError.value = 'Ocurrió un error inesperado al intentar iniciar sesión.'
        }
    }
    finally {
        cargando.value = false
    }
}



</script>

<template>
    <div v-if="mensajeError" class="alert error">
        <span>⚠️ {{ mensajeError }}</span>
    </div>

    <div class="base">
        <h1>Inicio de Sesión</h1>
        <div class="login">
            <form @submit.prevent="hacerLogin" class="form">
                <!-- Campo: Email -->
                <div class="form-group">
                    <label for="email">Correo Electrónico</label>
                    <input id="email" v-model="datosFormulario.email" type="email" placeholder="usuario@ejemplo.com"
                        :class="{ 'input-error': errores.email }" :disabled="loading" required />
                    <!-- Error específico del campo devuelto por Laravel -->
                    <span v-if="errores.email" class="error-text">
                        {{ errores.email[0] }}
                    </span>
                </div>

                <!-- Campo: Contraseña -->
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input id="password" v-model="datosFormulario.password" type="password" placeholder="••••••••"
                        :class="{ 'input-error': errores.password }" :disabled="loading" required />
                    <span v-if="errores.password" class="error-text">
                        {{ errores.password[0] }}
                    </span>
                </div>

                <!-- Botón de Envío con Estado de Carga -->
                <button type="submit" class="boton boton-amarillo-claro-1" :disabled="loading">
                    <span v-if="loading" class="spinner"></span>
                    <span>{{ loading ? 'Ingresando...' : 'Iniciar Sesión' }}</span>
                </button>
            </form>
        </div>
    </div>
    <div>

    </div>
</template>

<style scoped>
.login {
    font-size: x-large;
    height: 20vh;
    display: flex;
    flex-direction: column;
}

.login input {
    font-size: larger;
    border: none;
    border-bottom: 1px solid grey;
}
</style>
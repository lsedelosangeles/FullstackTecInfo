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

        router.push('/clientes')

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
                        :class="{ 'input-error': errores.email }" :disabled="cargando" required />

                    <!-- Error específico del campo devuelto por Laravel -->
                    <span v-if="errores.email" class="error-text">
                        {{ errores.email[0] }}
                    </span>
                </div>

                <!-- Campo: Contraseña -->
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input id="password" v-model="datosFormulario.password" type="password" placeholder="••••••••"
                        :class="{ 'input-error': errores.password }" :disabled="cargando" required />
                    <span v-if="errores.password" class="error-text">
                        {{ errores.password[0] }}
                    </span>
                </div>

                <!-- Botón de Envío con Estado de Carga -->
                <div class="form-group">
                    <button type="submit" class="boton boton-amarillo-claro-1" :disabled="cargando">
                        <span v-if="cargando" class="spinner"></span>
                        <span>{{ cargando ? 'Ingresando...' : 'Iniciar Sesión' }}</span>
                    </button>
                </div>

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

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    padding: 1rem;
    font-family: system-ui, -apple-system, sans-serif;
}

.login-card {
    width: 100%;
    max-width: 400px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    padding: 2.5rem;
    border: 1px solid #e2e8f0;
}

.header {
    text-align: center;
    margin-bottom: 2rem;
}

.header h2 {
    margin: 0;
    color: #0f172a;
    font-size: 1.75rem;
    font-weight: 700;
}

.header p {
    margin-top: 0.5rem;
    color: #64748b;
    font-size: 0.9rem;
}

.alert.error {
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    color: #991b1b;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #334155;
}

input {
    padding: 0.75rem 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
}

input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

input.input-error {
    border-color: #ef4444;
}

.error-text {
    color: #dc2626;
    font-size: 0.8rem;
}

.btn-submit {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    padding: 0.875rem;
    background-color: #2563eb;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-submit:hover:not(:disabled) {
    background-color: #1d4ed8;
}

.btn-submit:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
}

.spinner {
    width: 16px;
    height: 16px;
    border: 2px solid #ffffff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.footer {
    margin-top: 2rem;
    text-align: center;
    font-size: 0.875rem;
    color: #64748b;
}

.footer a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;
}

.footer a:hover {
    text-decoration: underline;
}
</style>
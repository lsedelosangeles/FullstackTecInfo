<script setup>
</script>

<template>
    <div class="base">
        <div class="principal sombra_1 ">
            <h1>Ingreso:</h1>
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario">
            <label for="contrasenia">Contraseña:</label>
            <input type="password" id="contrasenia">
            <p></p>
            <button>Iniciar Sesión</button>
            <p></p>
        </div>
    </div>

</template>

<style scoped>
.base {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #F2EBE3;
    justify-content: center;
    align-items: center;
}

.principal {
    width: 25vw;
    height: 40vh;
    min-height: 320px;
    min-width: 330px;
    border-radius: 30px;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(4, 50px);
    align-items: center;
    row-gap: 10px;
    padding: 30px;
}

.principal h1 {
    font-size: 30px;
    grid-column: span 2;
    text-align: center;
}

.principal label {
    font-weight: bold;

}

.principal input {
    height: 2em;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    transition: all 1500ms;
    font-size: 1em;
    text-align: center;
}

.principal button {
    position: relative;
    grid-column: span 2;
    width: 75%;
    left: 12.5%;
    height: 40px;
    border-radius: 10px;
    font-size: 1.2em;
    font-weight: bold;
}
</style>
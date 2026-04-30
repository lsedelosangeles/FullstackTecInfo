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
    height: 50vh;
    border-radius: 30px;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(1, 2fr, 1, 1fr);
    grid-template-rows: repeat(2, 50px);
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
    height: 25px;
}

.principal button {
    position: relative;
    grid-column: span 2;
    width: 75%;
    left: 12.5%;
    height: 40px;
    border-radius: 10px;
}
</style>
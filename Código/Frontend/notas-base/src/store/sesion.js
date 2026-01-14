import { defineStore } from "pinia";
import instanciaAxios from "../services/api";
import router from "../router";

export const useAlmacenSesion = defineStore(
  "sesion", //Identificador único del almacenamiento
  {
    state: () => ({
      //Estado reactivo del almacen
      usuario: null, //Almacen de las notas
      loading: false,
      error: null,
    }),
    getters: {
      //Métodos para obtener elementos del almacen
      sesionIniciada: (state) => !!state.usuario,
      sesionActiva: (state) => state.usuario,
    },
    actions: {
      //Acciones para almacenar elementos, editarlos, eliminarlos, etc.
      agregarSesion(usuarioN) {
        this.usuario = usuarioN;
      },

      async iniciarSesion(datosUsuario) {
        this.usuario = null;
        this.loading = true;
        this.error = null;

        try {
          await instanciaAxios.axiosCSRF.get("");

          const respuesta = await instanciaAxios.axiosBase.post(
            "/ingresar",
            datosUsuario
          );
          console.log("RESPUESTA -->");
          console.log(respuesta.data.usuario);

          alert("El servidor dice: " + respuesta.data.mensaje);

          this.agregarSesion(respuesta.data.usuario);
          router.push({ name: respuesta.data.destino });
        } catch (error) {
          this.error = error;

          console.error("ERROR --> ");
          console.error(error);
          alert(error.response.data.mensaje);
        }
        this.loading = false;
      },

      /**
       * Permite chequear si la sesión almacenada sigue estando activa
       */
      async chequearSesion() {
        this.loading = true;
        this.error = null;

        try {
          //Pruebas
          await instanciaAxios.axiosCSRF.get("");
          const pruebas = await instanciaAxios.axiosBase.get("user");
          console.log("Pruebas");
          console.log(pruebas);
          ///
        } catch (error) {
          this.error = error;
          console.error("ERROR --> ");

          //FRONTEND: Si se recibe un error 401, indica que el usuario no esta autenticado
          if (error.response.status == 401) {
            alert("Debe iniciar sesion");
            //this.cerrarSesion();
          }
        }
        this.loading = false;
      },

      /**
       * Permite cerrar la sesión abierta
       */
      async cerrarSesion() {
        this.usuario = null;

        this.loading = true;
        this.error = null;

        try {
          await instanciaAxios.axiosCSRF.get("");
          const respuesta = await instanciaAxios.axiosBase.post(
            "usuarios/cerrarSesion"
          );
          router.push({ name: "inicioSesion" });
        } catch (error) {
          this.error = error;
          console.error("ERROR --> ");
        }
      },
    },
    persist: true,
    /**
     * FRONTEND: Esta opción le indica al plugin de persistencia que debe habilitar
     * la persistencia para este almacen.
     */
  }
);

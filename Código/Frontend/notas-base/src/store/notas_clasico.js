import { defineStore } from "pinia";
import instanciaAxios from "../services/api";

export const useAlmacenNotas = defineStore(
  "notas", //Identificador único del almacenamiento
  {
    state: () => ({
      //Estado reactivo del almacen
      notas: [], //Almacen de las notas
      loading: false,
      error: null,
    }),
    getters: {
      //Métodos para obtener elementos del almacen
      notaPorID: (state) => {
        return (notaId) => 
          state.notas.find(
            (nota) => nota.id === notaId
          );
      },
    },
    actions: {
      //Acciones para almacenar elementos, editarlos, eliminarlos, etc.

      /**
       * Permite agregar una Nota al almacen de datos
       * @param {*} nota
       */
      async agregarNota(nota) { //FRONTEND: al agregar axios, los métodos que se comunican con el backend deben volverse 'async'
        const nuevaNota = {
          texto: nota.texto,
          titulo: nota.titulo,
        };

        this.loading = true
        this.error = null
        try {
          const respuesta = 
            await instanciaAxios.post(
              'nota/nueva',
              nuevaNota
            )
          alert("El servidor dice: " + respuesta.data.estado + "," + respuesta.data.mensaje)
          this.obtenerNotas()
        } catch (error) {
          this.error = error
        } finally {
          this.loading = false
        }

      },

      async obtenerNotas(){
        this.loading = true
        this.error = null
        try {
          const respuesta = await instanciaAxios.get('notas')
          this.notas = respuesta.data.notas
        } catch (error) {
          this.error = error          
        } finally {
          this.loading = false
        }
      }
    },
  }
);



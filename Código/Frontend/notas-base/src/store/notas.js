import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import instanciaAxios from "../services/api";

export const useAlmacenNotas = defineStore(
  //FRONTEND: Nombre del almacén por el que podremos ubicarlo
  "notas",

  //FRONTEND: Objeto principal del almacén
  () => {
    const notas = ref([]);
    const loading = ref(false);
    const error = ref(false);

    const notaPorID = (IdNota) => {
      notas.value.find((nota) => nota.id === IdNota);
    };

    const agregarNota =
      //FRONTEND: al agregar axios, los métodos que se comunican con el backend deben volverse 'async'
      async (nota) => {
        console.log("hmmm...");
        loading.value = true;
        error.value = null;

        const nuevaNota = {
          texto: nota.texto,
          titulo: nota.titulo,
        };

        console.log(nuevaNota);
        try {
          await instanciaAxios.axiosCSRF.get("");
          const respuesta = await instanciaAxios.axiosBase.post(
            "nota/nueva",
            nuevaNota
          );
          alert(
            "El servidor dice: " +
              respuesta.data.estado +
              "," +
              respuesta.data.mensaje
          );
          obtenerNotas();
        } catch (error) {
          error.value = error;
        } finally {
          loading.value = false;
        }
      };

    const obtenerNotas = async () => {
      loading.value = true;
      error.value = null;

      try {
        const respuesta = await instanciaAxios.get("notas");
        notas.value = respuesta.data.notas;
      } catch (error) {
        error.value = error;
      } finally {
        loading.value = false;
      }
    };

    return { notas, loading, error, obtenerNotas, agregarNota, notaPorID };
  }
);

import { ref,computed } from "vue";
import { defineStore } from "pinia";

export const useNotasStore = defineStore(
    'notas', () => {
      
  //Almacén Principal
  const notas = ref([
    {   
        id: 1, 
        titulo: 'Comprar materiales', 
        texto: 'Hojas A4 y marcadores para la clase.'
    },

    { 
        id: 2, 
        titulo: 'Abitab', 
        texto: 'Pagar UTE'
    }
  ])
  
  // Contador para el próximo ID 
  const siguienteId = computed(
    ()=>notas.value.length+1
  )

  // Acciones del Almacén
  // Agregar una nueva nota
  const nuevaNota = (notaNueva) => {
    
    let idNueva = siguienteId.value
    const nn = {
      id: idNueva,
      titulo: notaNueva.titulo,
      texto: notaNueva.texto
    }

    notas.value.push(nn)

    alert("Nota "+ idNueva +" fue agregada")
    }

  // Función para eliminar una nota por su ID
  const borrarNota = (id) => {
    notas.value = notas.value.filter(nota => nota.id !== id)
  }

  // --- Getters (Computed) ---
  // Un getter útil para mostrar en la vista inicial cuántas notas hay en total
  const cantidad = computed(() => notas.value.length)

  // Retornamos todo lo que los componentes van a necesitar usar
  return {
    notas,
    siguienteId,
    cantidad,
    nuevaNota,
    borrarNota
  }
})

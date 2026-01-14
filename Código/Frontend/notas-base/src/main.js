import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

//FRONTEND: PINIA: Se agrega pinia al proyecto
import { createPinia } from "pinia";

//FRONTEND: Se agrega la persistencia para los almacenes de Pinia
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

//FRONTEND: AXIOS: Se agrega axios al proyecto
import instanciaAxios from "./services/api";

//FRONTEND: inicializamos las funcionalidades de Pinia mediante una instancia
const pinia = createPinia();

//FRONTEND: PINIA: Le agregamos persistencia a la instancia de Pinia
pinia.use(piniaPluginPersistedstate);
//   IMPORTANTE: PINIA: la instancia de Pinia debe declararse antes que la instancia de la App
//      para asegurarnos que esta disponible para su uso.

//FRONTEND: Declaración y configuración de la instancia de la App.
const app = createApp(App);

//FRONTEND: le agregamos las instancias de Pinia y del router a la app.
//   IMPORTANTE: PINIA: la instancia de Pinia debe agregarse primero
app.use(pinia);
app.use(router);

app.mount("#app");

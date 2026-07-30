import { createApp } from 'vue'
import { createPinia } from 'pinia'

//Importamos el CSS para uso global
import '../src/assets/estilo.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

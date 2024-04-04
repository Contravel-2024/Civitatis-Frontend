import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'bulma/css/bulma.css'
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'

const app = createApp(App)
app.use(router)
app.use(createVuetify())
app.mount('#app')
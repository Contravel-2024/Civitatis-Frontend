import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'bulma/css/bulma.css'
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    icons: {
        iconfont: 'mdi',
    },
    breakpoint: {
        thresholds: {
            xs: 340,
            sm: 540,
            md: 800,
            lg: 1280,
        },
        scrollBarWidth: 24,
    },

})
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.0-beta.14/vue.esm-browser.js'
import App from './App.vue'
import router from './router'
import axios from "axios";

const app = createApp(App)

app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')

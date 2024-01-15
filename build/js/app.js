import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import App from './App.vue'
import router from './router'
import axios from "https://unpkg.com/axios/dist/axios.min.js";

const app = createApp(App)

app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')

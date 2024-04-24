import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//para el bootstrap
import {BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

//npm install pinia
import { createPinia } from 'pinia'
const pinia = createPinia();

const app = createApp(App)

app
.use(BootstrapVue3)
.use(router)
.use(pinia)
.mount('#app')

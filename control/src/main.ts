import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//para instalar lazyload carga perezosa esto nos servira para cuando queramos cargar contenido 
//que sepamos que tardara en llegar y podriamos manipular esa espera
//npm i vue3-lazyload   --- https://www.npmjs.com/package/vue3-lazyload
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

//en el objeto del lazy load podriamos cargar por defecto como quisieramos manipular ese cargado dinamico pero si lo hacemos aqui todos tendran ese efecto pero tambien podriamos hacerlo individualmente como vemos en la vista about
app.use(VueLazyLoad,{}).use(router).mount('#app')

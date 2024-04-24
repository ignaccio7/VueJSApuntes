import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//para los iconos los sacamos de la pagina https://oh-vue-icons.js.org/
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { FaFlag, PxUsers  } from "oh-vue-icons/icons";

addIcons(FaFlag, PxUsers );

const app= createApp(App);

app.component("v-icon", OhVueIcon)
.use(router).mount('#app')

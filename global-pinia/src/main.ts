import { createApp } from 'vue'
import App from './App.vue'

//npm install pinia
import { createPinia } from 'pinia'
//npm i pinia-plugin-persistedstate --> https://github.com/prazdevs/pinia-plugin-persistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//podremos ver que en el package.json que se agrega el script para ejecutar la correcta comprobacion del test

// La configuracion del testing que estamos usando en este caso cypress estara en un archivo de configuracion 
// y lo podremos ver en cypress.json
// ahi podremos observar el plugin inicial que estaremos usando
/**
Tambien podremos ver el directorio de test en donde estaran el eslint y los 
directorios que nos ofrece cypress

plugins-->La configuracion de todo el entorno de cypress
specs-->Donde escribimos y programamos nuestros test para la app
support-->Escribimos toda la informacion necesaria para que nuestros test funcionen por ejem commands comandos propios que hayamos desarrollado nosotros - index que elementos de soporte estaremos utilizando o necesitando antes de iniciar los tests. Configuraciones globales o de comportamiento 

 */

//npm install pinia
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia).use(router).mount('#app')

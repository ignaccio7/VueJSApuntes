import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

/**
 *Cuando estemos trabajando con una PWA estaremos trabajando contra 2 archivos en concreto 
 * Manifest - configurar la aplicacion
    Nos va ayudar a establecer las condiciones de como debe reproducirse nuestra app cuando este siendo comsumida mediante un pwa
 * ServiceWorker - Mejorar el rendimiento
    Sera un hilo entre la capa de app de consumo de api y el frontal. Se encargara de hacer de enlace intermedio para poder servir datos sin necesidad de llegar al nodo de red es decir sin hacer una peticion

 */

/**
 * Ejecutaremos el comando para hacer el codigo de distribucion npm run build para realizar la construccion
 * nos generara una carpeta dist con todo el contenido para subir el servicio
 * en esa carpeta dist podremos ver que en su estructura tiene el manifest.json
 
 * Para poder probar el funcionamiento de la PWA necesitaremos de un servicio http que nos permita realizar el levantado del sistema con la distribucion (dist) levantada
    npm install http-server -g
 * Una vez instalado podemos levantar el servicio de distribucion con el comando
    http-server <directorio a levantar>
    si estamos en la carpeta de pwa
    http-server dist/

    pero tristemente no podremos ver el funcionamiento de esta pwa ni con esta extension lo que pasa esque una pwa solo nos va funcionar a traves de un servicio https
    y como ya levantamos con http-server dist/ en el puerto 8080 podemos valernos de esta pagina
    https://ngrok.com/ para tunelar el puerto que estamos haciendo correr en el 8080 y darnos un nuevo socket pero esta vez con https
    una vez instalado y nos hayamos registrado ejecutamos y nos saldra una terminal asi colocamos   ngrok.exe http 8080
    y nos dara un nuevo socket con https y si abrimos esa direccion si podremos ver en el navegador nos saldra el icono de instalar la pwa
    e incluso en las configuraciones del navegador podremos ver en la parte de application el service worker que esta corriendo 

*/

/**
 * Para configurar al manifest podemos hacerlo de 2 maneras
 * 1 - copiar el manifest.json que se genero en la carpeta dist a nuestra carpeta public y ahi editarlo y eliminamos el del dist
 * si modificamos de esa manera deberemos volver a hacer correr el npm run build
 * 2 - El otro metodo es modificando el manifest no copiando el archivo sino estableciendo la configuracion que tiene que tener el manifest en el archivo de dist en la carpeta que queriamos
 * este archivo es el vue.config.js
 * 
 * 
 */

/**
 * Recapitulando los service workers 
 * nos serviran como un intermedio entre la aplicacion y los servicios externos
 * nuestra app no ira contra el servicio externo sino contra el service worker y este a su vez ira contra el servicio externo
 * este podra permitir servicios de escritura en una base de datos local podria ser el local storage 
 * este SW tambien ayudara de guardar las cosas que quiere ver el usuario cuando no tenga conexion a internet
 * y tambien se actualizara cuando este vuelva a tener
 * Otra ventaja tambien podremos configurar para que este este en una escucha activa para notificar acciones cuando tenga o no internet algo similar a las subscripciones en los grafos
 * Este archivo lo estaremos modificando en el archivo registerServiceWorker.ts o js si no usariamos ts
 * ese fichero se encargara de hacer el registro de nuestro service worker en el proyecto de tal manera nos ofrecera las acciones que tiene que hacer cuando se disparan los diferentos eventos en el servicio
 */




//PARA HACER USO DEL PLUGIN QUE CREAMOS EN la carpeta plugins
import example from '../plugins/example'

const app = createApp(App)

//ahora lo usaremos en el archivo App.vue
app.use(example,{
   message:'Soy el plugin de ejemplo'
})

app.mount('#app')

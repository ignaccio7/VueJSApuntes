/* eslint-disable no-console */

import { register } from 'register-service-worker'

//cuando detecte que la app esta en produccion y no asi en desarrollo
if (process.env.NODE_ENV === 'production') {  
  register(`${process.env.BASE_URL}service-worker.js`, {
    //indica que este service worker esta siendo utilizado
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    //se marca cuando ya esta registrado y esta comenzando a funcionar
    registered () {
      console.log('Service worker has been registered.')
    },
    //cuando ah habido una accion que esta descargando contenido cacheado
    cached () {
      console.log('Content has been cached for offline use.')
    },
    //cuando este descargando nuevo contenido cuando este online
    updatefound () {
      console.log('New content is downloading.')
    },
    //para cuando detecte que existe nuevo contenido que podramos descargar
    updated () {
      console.log('New content is available; please refresh.')
    },
    //que va usar nuestro sistema cuando no tenga conexion a internet
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

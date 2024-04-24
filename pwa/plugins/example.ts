export default {
    //para poder crear nuestro propio plugin debemos seguir la siguiente estructura
    //  (<app es la aplicacion que nos esta utilizando>,<variables que recibiremos al momento que llame a nuestro plugin en el main.ts>)
    install:(app,options)=>{
        //un ejemplo podemos hacer directivas perzsonalizadas u otro caso de uso es el de variables globales 
        app.config.globalProperties.$contador = () => 0,
        // app.config.globalProperties.$saySomething = () => alert("Hola")
        app.config.globalProperties.$saySomething = () => alert('Hola '+options.message)
    }
}
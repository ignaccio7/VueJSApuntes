import { createApp, provide } from 'vue'
import App from './App.vue'


//-> esto es al final

//se debe instalar npm i subscriptions-transport-ws
//esto porque depende de los diferentes servicios que estemos usando pues las dependencias que usan las debemos instalar de forma manual

//Para las subscripciones como son acciones que el servidor nos respondera y estas dependeran de una nueva configuracion que tenemos que realizar
//necesitamos hacer el link para la comunicacion con el servicio
//import { WebSocketLink } from '@apollo/client/link/ws'; con este daba error por eso cambiamos a las de abajo
//esto se debe a que Si está utilizando el graphl-wsprotocolo para su servidor, entonces necesita usarGraphQlWsLink 349en el lado del cliente (en lugar de WebSocketLink) para garantizar que su protocolo de suscripción sea coherente de servidor a cliente.
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

//para saber si realizo una query o mutation o subscripcion
import { getMainDefinition } from '@apollo/client/utilities';

// const wsLink = new WebSocketLink({
//     //sera la misma url de arriba pero http://localhost:4000/graphql envez del protocolo http ira por el protocolo ws websocket
//     uri:`ws://localhost:4000/graphql`,
//     options:{
//         //si por x motivo perdemos la conexion con el servicio pues el sistema tratara de reconectarse para detectar las posibles acciones que ocurrioeron
//         reconnect:true
//     }
// });

//se arregla con https://www.npmjs.com/package/graphql-ws?activeTab=readme para instalar sus dependencias de createClient npm i graphql-ws
const wsLink = new GraphQLWsLink(createClient({
    //sera la misma url de arriba pero http://localhost:4000/graphql envez del protocolo http ira por el protocolo ws websocket
    url:`ws://localhost:4000/graphql`
}));

//-> esto es al final


/*Usaremos GraphQL que es un lenguaje de consultas y apollo que es el framework que levanta el servicio
    en GrapQL se tiene 3 tipos de peticiones
        Querys          equivalente a pedir datos parecido a un GET
        Mutaciones      operaciones para modificar o registrar datos existentes POST PUT
        Subscripciones  eventos que vamos a construir para estar escuchando notificaciones lo que hace un websocket
    
    para levantar el servidor de apollo : npm start
*/
/**
 * https://v4.apollo.vuejs.org/guide/installation.html
 * npm install --save graphql graphql-tag @apollo/client
 * instalamos el paquete ed graphql luego los tags para hacer las peticiones y por ultimo el cliente
 */
//el cliente ed apolo el http que necesitamos y el formato de trabajo con el cual ubicaremos las conexiones en este caso la memoria cache
//import { ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client/core';
//->esto al final 
//añadimos el split para hacer la division cuando queremos escuchar esa subscripcion depende si queremos hacer una query mutation
import { ApolloClient, createHttpLink, InMemoryCache, split} from '@apollo/client/core';
//->esto al final

//creamos el httplink para conectarnos a la api del servicio que levantamos 
const htttpLink = createHttpLink({
    uri:"http://localhost:4000/graphql"
});

//->esto al final
//en funcion al tipo de operacion retornara un elemento u otro
const link = split(
    //deconstruyemos la query
    ({query})=>{
        //detectara si es una operacion de query o mutation o subscription
        const definition = getMainDefinition(query)
        return (
            //retornara en funcion del tipo de query que se ejecutara devolvera el websocketlink o el httplink
            definition.kind === "OperationDefinition" && definition.operation === "subscription"
        )
    },
    //retornara ya sea wslink o httplink
    wsLink,
    htttpLink
);
//->esto al final


//para mejorar la eficiencia del contenido
const cache = new InMemoryCache();

// const apolloClient = new ApolloClient({
//     link:htttpLink,
//     cache
// });
//->esto al final
const apolloClient = new ApolloClient({
    //hacemos que la url a la cual hara las consultas dependera segun lo que nosotros determinemos si sera http o un ws segun hagamos querys o mutationes 
    link:link,
    cache
});
//->esto al final

//para manejar con composition api
//npm i --save @vue/apollo-composable
//ahora podemos conectarnos a un unico servicio de graphql o a varios
//para un unico servicio
import { DefaultApolloClient } from '@vue/apollo-composable';


//en lugar de crear directamente en el app la aplicacion .... createApp(App).mount('#app')
//podemos pasar parametros para nosotros determinar la configuracion de la aplicacion esto para inyectar el servicio
//provide(<clave con la cual proveemos>,<valor del cliente apollo>)
//tambien debemos determinar el metodo de renderizado
import { h } from 'vue'; //ese h lo unico que hace es tomar un contenido en js y lo estara pintando en html

createApp({
    setup(){
        provide(DefaultApolloClient,apolloClient)
    },
    render:()=>h(App)
}).mount('#app')


//que pasa si necesitamos consumir dos o mas servicios de graphql
//linea 33
// import { ApolloClients } from '@vue/apollo-composable';

// createApp({
//     setup(){
//         provide(ApolloClients,{
//             //ademas de eso podemos determinar uno por defecto para que sino determinamos a cual cliente solicitar la consulta ira a ese
//             default: apolloClient,
//             cliente1: apolloClient,
//             cliente2: apolloClient2,
//             cliente3: apolloClient3
//         })
//     },
//     render:()=>h(App)
// }).mount('#app')



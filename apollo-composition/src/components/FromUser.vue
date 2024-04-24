<template>
    <!-- OBTIENE TODOS LOS COMENTARIOS POR USUARIO -->
    <div class="seccion">
        <h1>Comments For User</h1>
        <div v-if="loading">
            <h3>Loading...</h3>
        </div>
        <div v-else>
            <ul>
                <li v-for="(comment, index) in result.getCommentsFromUser" :key="index">
                    <b>{{ comment.name }}</b> : {{ comment.text }}
                </li>
            </ul>
        </div>
        <div v-if="error">
            <h3 style="error">Ocurrio un error: {{ error.message }}</h3>
        </div>
    </div>
    <!-- OBTIENE TODOS LOS COMENTARIOS POR USUARIO -->

    <button @click="refetch">Refresh</button>

</template>

<script setup lang="ts">
//import { useQuery, useLazyQuery } from '@vue/apollo-composable'; tambien podriamos estar haciendo la carga peresoza con graphql y la manejariamos de la misma manera que cuando consumiamos recursos
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

//por usuario
// useQuery(<documentoDeLaConsulta>,<variables>) (podrian ser en un objeto {} pero estas variables no podrian ser variables dentro de un entorno reactivo si quremos que sean variables reactivas las hacemos en una funcion
//          ,<opciones> fetchPolicy(cual sera la politica para vincular los datos que traiga el servicio-> cachefirst si ya tiene cacheado los datos entonces trae esos sino estan cacheados va al servidor de apollo || cache-and-network para datos que queramos tener siempre actualizados verifica del cache y de la red || tambien estan el cache-only o network-only) 
//          pollInterval marca cada cuanto queremos establecer un intervalo para hacer una solicitud al servicio para refrescar los datos   

//let { result, loading, error } = useQuery(gql`
//          que ocurre si le damos la potestad al usuario para que el refresque los datos esto con un boton el evento refetch)
// let { result, loading, error, refetch } = useQuery(gql`
//podemos tener hooks para disparar acciones onResult para cuando traigamos resultados o onError cuando un error haya ocurrido en la consulta
let { result, loading, error, refetch, onResult, onError } = useQuery(gql`
    query($name: String!){
      getCommentsFromUser(name: $name) {
        name
        text
      }
    }
  `, () => ({
    //name://podria ser una referencia una prop etc
    name: "User 1"
    }),{
        fetchPolicy:'cache-and-network',
        pollInterval: 5000
    }
);

//cuando emos obtenido un resultado y queremos realizar una accion
onResult((queryResult)=>{
    console.log("OnResult");
    console.log(queryResult.data); //los datos
    console.log(queryResult.loading); //si cargo o no
    console.log(queryResult.networkStatus); //el estado de la red
    
});

//cuando emos obtenido un error
onError((queryError)=>{
    console.log(error.graphQlErrors);    
});

</script>

<style scoped></style>
<template>
  <!-- OBTIENE TODOS LOS COMENTARIOS -->
  <div class="seccion">
    <h1>Comments</h1>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-else>
      <ul>
        <li v-for="(comment, index) in result.getAllComments" :key="index">
          <b> {{ comment.name }} </b> : {{ comment.text }}
        </li>
      </ul>
    </div>
    <div v-if="error">
      <h3 style="error">Ocurrio un error : {{ error.message }}</h3>
    </div>
  </div>
  <!-- OBTIENE TODOS LOS COMENTARIOS -->


  <FromUser></FromUser>

  <MutationCreateNote></MutationCreateNote>

  <SubscriptionApollo></SubscriptionApollo>
</template>

<script lang="ts" setup>

//este composable nos ayudara a realizar las consultas en graphql
import { useQuery } from '@vue/apollo-composable';
//nos va permitir importar el elemento que nos va a generar los string template de graphql
import gql from 'graphql-tag';

// useQuery(<documentoDeLaConsulta>)
//<gql`<consulta>`> asi indicamos que este string template es una consulta de graphql
let { result, loading, error } = useQuery(gql`
    query{
      getAllComments {
        name
        text
      }
    }
  `);
//result resultado de la consulta
//loading estado de la consulta si finalizo o no la consulta
//error potenciales errores en la peticion mala consulta servidor no encontrado etc

import FromUser from "@/components/FromUser.vue";

import MutationCreateNote from "@/components/MutationCreateNote";

import SubscriptionApollo from './components/SubscriptionApollo.vue';




</script>

<style>
.error {
  color: rgb(212, 39, 39);
}
</style> 

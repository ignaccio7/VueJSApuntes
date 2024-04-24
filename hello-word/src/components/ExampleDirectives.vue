<template>
  <!----      IF - ELSE      -->
  <div>
    <h2>con V-if solo renderiza en el dom el elemento con valor verdadero</h2>
    <h3 v-if="age > 18">Eres mayor de edad</h3>
    <h3 v-else>No eres mayor de edad</h3>
  </div>

  <div>
    <h2>con V-show renderiza en el dom ambos elementos</h2>
    <h3 v-show="age > 18">Eres mayor de edad</h3>
    <h3 v-show="age <= 18">No eres mayor de edad</h3>
  </div>


  <!----      FOR      -->
  <div>
    <h2>For</h2>
    <h3>Array de Cadenas</h3>
    <ul>
      <li v-for="(forma,index) in formas" v-bind:key="index"> <b>{{ index }} : </b> {{ forma }} </li>
    </ul>
    <h3>Array de Objetos</h3>
    <ol v-for="pais in paises" :key="pais.nombre">
      <li>{{ pais.nombre }}</li>
      <li>{{ pais.continente }}</li>
      <li>{{ pais.poblacion }}</li>
    </ol>
  </div>


  <!----      VBIND-CLASS      -->
  <div>
    <h2>Vbind-Class</h2>
    <p v-bind:class="{'danger' : hasError}">Texto en danger si hasError es true</p>
  </div>

  <!----      VBIND-STYLE      -->
  <div>
    <h2>Vbind-Style</h2>
    <p v-bind:style="{backgroundColor : '#ccc', color: colorC}">Texto que cambiara al darle click</p>
    <button @click="changeColor()">Cambia color</button>
  </div>


</template>

<script setup lang="ts">
import { ref,Ref } from 'vue';

let age = 20;

let formas:Ref<Array<string>> = ref(["cuadrado","triangulo","circulo","pentagono"]); //con TS
//let formas = ref(["cuadrado","triangulo","circulo","pentagono"]);


/*let paises = [
  {
    nombre: "argentina",
    continente: "sudamerica",
    poblacion: 40000000
  },
  {
    nombre: "brasil",
    continente: "sudamerica",
    poblacion: 300000000
  },
  {
    nombre: "australia",
    continente: "oceania",
    poblacion: 18000000
  },
  {
    nombre: "nueva zelanda",
    continente: "oceania",
    poblacion: 8000000
  },
  {
    nombre: "china",
    continente: "asia",
    poblacion: 1000000000
  },
  {
    nombre: "tailandia",
    continente: "asia",
    poblacion: 32000000
  },
  {
    nombre: "‘españa",
    continente: "europa",
    poblacion: 29000000
  },
  {
    nombre: "alemania",
    continente: "europa",
    poblacion: 33000000
  },
]*/

//con TS
interface IPais {
  nombre:string,
  continente:string,
  poblacion:number
}

let paises:Ref<Array<IPais>> = ref([
  {
    nombre: "argentina",
    continente: "sudamerica",
    poblacion: 40000000
  },
  {
    nombre: "australia",
    continente: "oceania",
    poblacion: 18000000
  },
  {
    nombre: "china",
    continente: "asia",
    poblacion: 1000000000
  },
  {
    nombre: "‘españa",
    continente: "europa",
    poblacion: 29000000
  },
]);


let hasError = true;

let colorC = ref('#000');
const changeColor = ()=>  colorC.value = '#f6f6f6' ;


</script>

<style scoped>
h2 {
  color: rgb(70, 141, 141);
}
.danger{
  color:rgb(224, 44, 44);
}
.success{
  color: rgb(50, 151, 50);
}

</style>
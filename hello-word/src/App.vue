<template>
  <h1>HOLA MUAAAO</h1>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div class="card-container">
    <CounterOption />    
    <CounterComposition />
  </div>

  <hr>
  <h2>DIRECTIVAS (if-else-for-bindclass-bindstyle)</h2>
  <div class="card">
    <ExampleDirectives/>
  </div>

  <hr>
  <h2>Ejemplos de Formularios (v-model)</h2>
  <div class="card">
    <ModelForm/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import CounterOption from "./components/CounterOption.vue";
import CounterComposition from './components/CounterComposition.vue';
import ExampleDirectives from './components/ExampleDirectives.vue';
import ModelForm from './components/ModelForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    //HelloWorld
    CounterOption,
    CounterComposition,
    ExampleDirectives,
    ModelForm
}
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.card-container{
  display: flex;
  width: 100%;
  justify-content: center;
}
.card{
  border: 1px solid rgb(47, 47, 47);
  padding: 20px;
  width: fit-content;
  margin: auto;
}
</style>

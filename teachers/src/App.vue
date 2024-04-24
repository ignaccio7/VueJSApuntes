<template>
  <div>
    <div class="">
      <h1>Registro de Profes (v-model) </h1>
      <TeacherForm />
    </div>
    <br>
    <hr>
    <div class="">
      <h1>Listado de posts (props and emits)</h1>
      <ListPosts />
    </div>
    <hr>
    <div class="">
      <h1>Texto en reversa - Factura (Computadas)</h1>
      <ExampleComputed/>
    </div>
    <hr>
    <div class="">
      <h1>Directivas</h1>
      <ExampleDirectivas/>
    </div>


    
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeacherForm from './components/TeacherForm.vue';
import ListPosts from './components/ListPosts.vue';
import ExampleComputed from './components/ExampleComputed.vue';
import ExampleDirectivas from './components/ExampleDirectivas.vue';

export default defineComponent({
  name: 'App',
  components: {
    TeacherForm,
    ListPosts,
    ExampleComputed,
    ExampleDirectivas
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
  margin-top: 20px;
}
</style>

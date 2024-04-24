<template>
  <div class="home">
    <h1>Listado de usuarios</h1>

    <!--Esto ya es extra-->
    <input type="text" placeholder="Digite Nombre a buscar" v-model="search" @keyup="handleSearch">
    <!--Esto ya es extra-->

    <div>
      <button @click="handleLayout(ListLayout)">Ver en Lista</button>
      <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
      <button @click="handleLayout(TableLayout)">Ver en tabla</button>
    </div>
    <!-- este es un componente dinamico que nosotros decidiremos cual layout utilizar a mostrar -->
    <component :is="layout" :content="filterUsers"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef, defineAsyncComponent } from 'vue';
import ListLayout from '@/layouts/userLayouts/ListLayout.vue';
//https://learnvue.co/articles/lazy-load-components

//defineAsyncComponent recibe una funcion anonima que se encargara de traernos la vista
//const ListLayout = defineAsyncComponent(() => import('@/layouts/userLayouts/ListLayout.vue'));
const CardLayout = defineAsyncComponent(() => import('@/layouts/userLayouts/CardLayout.vue'));
const TableLayout = defineAsyncComponent(() => import('@/layouts/userLayouts/TableLayout.vue'));

//https://mokkapps.de/vue-tips/optimize-performance-using-shallow-ref
//https://dev.to/bitovi/vuejs-reactivity-system-ref-reactive-shallowref-shallowreactive-oe7
//en el shalowref los cambios realizados en sus propiedades activarán un cambio solo si cambia la referencia de memoria. 
// const layout = ref(ListLayout);
const layout = shallowRef(ListLayout);

const handleLayout = (comp:any)=>{ layout.value = comp };

const users = ref([
  { name: 'Emma', age: 33, position: 'Manager' },
  { name: 'Isaac', age: 50, position: 'Manager' },
  { name: 'David', age: 29, position: 'Manager' },
  { name: 'Charlie', age: 50, position: 'Coordinator' },
  { name: 'Alice', age: 40, position: 'Coordinator' },
  { name: 'Grace', age: 35, position: 'Designer' },
  { name: 'Isaac', age: 44, position: 'Developer' },
  { name: 'Grace', age: 45, position: 'Analyst' },
  { name: 'Frank', age: 48, position: 'Analyst' },
  { name: 'Hannah', age: 30, position: 'Designer' },
  { name: 'Frank', age: 45, position: 'Manager' },
  { name: 'Isaac', age: 31, position: 'Manager' },
  { name: 'Jack', age: 48, position: 'Developer' },
  { name: 'Charlie', age: 33, position: 'Designer' },
  { name: 'Frank', age: 25, position: 'Analyst' }
]);

//extra
let search = ref('');
//let filterUsers = ref([]);
let filterUsers = ref<Array<object>>([]);

filterUsers.value = users.value;

const handleSearch = ()=>{
  filterUsers.value = users.value.filter(elem => elem.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()));
};
</script>
<style scoped>
  input{
    padding: 10px;
    margin-bottom: 10px;
  }
</style>

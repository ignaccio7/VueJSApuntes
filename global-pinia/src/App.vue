<template>
  <div>
    <!-- para pinia -->
    <section>
      <h1>Counter - Pinia</h1>
      <h2>{{ counterStore.counter }} x2 = {{ counterStore.multi2 }}</h2>
      <button @click="counterStore.increment(1)">Increment</button>
    </section>

    <!-- para watchers -->
    <section>
      <h1>Watchers</h1>
      <!-- Los watches son observadores que nos informaran cuando un determinado valor que nosotros queramos cambie su valor -->
      <input type="text" v-model="note" placeholder="Cuando escribas disparare">      
    </section>

  </div>
</template>

<script lang="ts" setup>

  import { useCounterStore } from './store/counter'
  const counterStore = useCounterStore();

  import { watch, ref } from 'vue';
  // import { watchEffect, ref } from 'vue';
  let note = ref('');
  //este observador se ejecuta cuando ah cambiado cualquier valor asi que tendriamos que validar de alguna manera. Y se puede ver el valor nuevo no asi el antiguo
  // watchEffect(()=>{
  //   alert(`Se ah modificado el valor ${note.value}`);
  // });


  watch(note,(newValue,oldValue)=>{
    //alert(`Se ah modificado el valor ${note.value}`);
    alert(`Se ah modificado el valor de ${oldValue} -a- ${newValue}`);
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
</style>

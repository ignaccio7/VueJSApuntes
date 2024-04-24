<template>
    <div>
        <h1>Counter - Composition</h1>
        <h2>{{ counter }} x2 = {{ multi2 }}</h2>
        <!-- <button @click="setCounter(counter + 1)">increment</button> -->
        <button @click="increment">increment</button>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const counter = computed(()=>{
      return store.state.counter;
    });
    const multi2 = computed(()=> store.getters.multi2);

    const increment = ()=> {
      //usamos el counter.value ya que es una propiedad computada
      store.commit('setCounter', counter.value + 1)
    };

</script>

<style scoped>
    
</style>
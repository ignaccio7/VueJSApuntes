<template>
  <div class="home">
    <h1>Contador App : </h1>
    <h2 id="counter">{{ contador }}</h2>
    <button @click="contador++">Incrementar</button>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  let contador = ref(0);

</script>

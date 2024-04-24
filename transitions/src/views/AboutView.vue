<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Probando los iconos</h2>
    
    <v-icon name="fa-flag" /> <br>
    <v-icon name="px-users" scale="2" fill="#57C181" title="mi icon" hover animation="pulse"/>

    <br><br>
    {{ count }}
    <button @click="count=count+1">Add</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
  let count = ref(0);
</script>
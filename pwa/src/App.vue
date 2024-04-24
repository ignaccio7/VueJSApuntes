<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h3>{{ $count() }}</h3><!--de esta manera estamos invocando la variable global-->
  <button @click="$saySomething()"></button>
</template>

<script lang="ts">

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

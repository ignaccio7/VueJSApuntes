<template>
    <div>
        <h1>Counter - Options</h1>
        <h2>{{ counter }} x2 = {{ multi2 }}</h2>
        <!-- <button @click="setCounter(counter + 1)">increment</button> -->
        <button @click="increment">increment</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { mapMutations, mapState, mapGetters } from 'vuex';

    export default defineComponent({
      name:'HelloWorld',
      computed:{
        ...mapState(['counter']),
        ...mapGetters(['multi2']),
      },
      methods:{
        ...mapMutations(['setCounter']),
        increment(){
          this.setCounter(this.counter + 1);
        }
      }
    })

</script>

<style scoped>
    
</style>

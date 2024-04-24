<template>
    <div>
        <div class="card">
            <h2> Counter Composition</h2>
            <h3>{{ counter }} </h3>
            <button @click="addCounter">Incrementar</button>
        </div> 
    </div>
</template>

<script setup lang="ts">
    /* DE ESTA MANERA SERIA CON JAVASCRIPT */
    /* 
    import { ref } from "vue";
    let counter = ref(0);
    const addCounter = ()=>{
        counter.value++;
    }
    */
   /* DE ESTA MANERA SERIA CON TYPESCRIPT */
    import { Ref,ref } from "vue";
    let counter:Ref = ref(0);
    const addCounter = ():void=>{
        counter.value++;
    }
</script>

<style scoped>
    .card{
        width: 300px;
        padding: 2rem;
        border: thin solid rgb(245, 147, 147);
    }
</style>
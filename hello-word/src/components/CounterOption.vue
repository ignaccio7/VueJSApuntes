<template>
    <div>        
        <div class="card">
            <h2>Counter Option</h2>
            <h3>{{ counter }} </h3>
            <button @click="addCounter">Incrementar</button>
        </div>        
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name:'CounterOption',
        data() {
            let counter = 0;
            return {
                counter
            }
        },
        methods:{
            addCounter(){
                this.counter++;
            }
        }
    });
</script>

<style scoped>
    .card{
        width: 300px;
        padding: 2rem;
        border: thin solid rgb(77, 77, 77);
    }
</style>
<template>
    <div class="padre">
        <h1>Soy el padre</h1>
        <button  @click="addDNI">Añadiento DNI</button> <br><br>
        <button @click="addPassport">Añadiento Pasaporte</button> <br><br>
        <!-- como expusimos el metodo necesitamos una referencia con la cual podamos vincularla -->
        <ChildComponent ref="childComponent"></ChildComponent>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import ChildComponent from './ChildComponent.vue';
    
    //esta es la referencia que creamos 
    let childComponent = ref(null);

    const addDNI=(e)=>{
        //de esta manera usamos la funcion que expusimos desde el hijo
        //hacemos una referencia como manejamos las cosas en POO al colocar metodos publicos como los otros privados
        childComponent.value.recalculate();
        // console.log(e.target);
        e.target.disabled = true;
    }

    const addPassport =(e)=>{
        childComponent.value.recalculate();
        e.target.setAttribute("disabled",true);
    }

</script>

<style scoped>
    div{
        max-width: 700px;
        border:1px solid black;
        margin: auto;
        padding: 20px;
    }
</style>
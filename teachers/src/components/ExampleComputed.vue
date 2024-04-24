<template>
    <div class="container">
        <div class="card">
            <label for="reversa">Introduzca algo : </label>
            <input type="text" name="reversa" id="reversa" placeholder="aqui" v-model="message"> 
            <h3>texto introducido : {{ message }} </h3>
            <h3>texto en reversa : {{ reverse }} </h3>
        </div>
        <div class="card">
            <h3>Factura</h3>
            <label for="subtotal">Introduzca el precio de su producto : </label>
            <input type="text" name="subtotal" id="subtotal" placeholder="aqui" v-model="subTotal">
            <h5>Descuento IT : .3%  - IVA : .13%</h5>            
            <h3>Total : {{ calcTotal }} </h3>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, Ref, computed } from 'vue';

    //para la cadena en reversa
    let message:Ref<string> = ref('');

    const reverse = computed(():string =>{
        return message.value.split('').reverse().join('');
    });

    //para la factura
    let subTotal = ref(0);
    const it = 3;
    const iva = 13;

    const calcTotal = computed(()=>{
        return Math.round((subTotal.value - (subTotal.value*(it/100))-(subTotal.value*(iva/100))));
    });

</script>

<style scoped>
    .container{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;  
        flex-wrap: wrap;      
    }
    .card{
        border: 1px solid lightblue;
        flex: 1 0 300px;
        padding: 20px; 
    }
</style>
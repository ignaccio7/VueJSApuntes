<template>
    <tr>
        <td> {{ props.user.name }} </td>
        <td> {{ props.user.age }} </td>
        <td> {{ props.user.position }} </td>
    </tr>
</template>

<script setup lang="ts">
//si olvidamos para que sirve el toRefs
//https://stackoverflow.com/questions/66585688/what-is-the-difference-between-ref-toref-and-torefs
//creara una referencia vinculada con la prop que nos llega en user de todo el objeto en si --- toRef solo es para una propiedad
    
const props = defineProps(['user']);                
     
    
</script>

<style scoped>
    tr{
        border-bottom: 1px solid black;
    }
    td{
        padding: 10px;
    }
</style>
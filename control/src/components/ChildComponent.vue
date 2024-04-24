<template>
    <div>
        <h1>Soy el hijo</h1>
        <h3>Porcentaje Completado {{ percentage }} %</h3>
    </div>
</template>

<script setup lang="ts">
    //import { ref, onMounted, defineExpose } from 'vue'; si nos salta advertencia es porque en el setup ya por defecto podemos usar ese hock
    import { ref, onMounted } from 'vue';

    let percentage = ref(0);

    onMounted(()=>{
        percentage.value = 20;
    })

    //si quisieramos añadir mas porcentaje esta funcion deberia ser propia de este componente
    //por lo cual nosotros podremos exponer este metodo al padre que lo este usando y no asi delegar un trabajo al padre que incurririamos en vincular trabajo que es propio del hijo
    const recalculate = ()=>{
        //por cada documento que presente aumenta 20
        percentage.value += 20;
    }

    //de esta manera exponemos el metodo
    defineExpose({recalculate});

</script>

<style scoped>
    
</style>
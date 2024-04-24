<template>
    <div>
        <input type="text" v-model="dato" placeholder="Lo que escribas se mostrara abajo"> <br>
        Dato : {{ dato }}
    </div>
</template>

<script setup lang="ts">
    import { ref,Ref } from 'vue';

    let dato:Ref<string> = ref('');

</script>

<style scoped>
</style>
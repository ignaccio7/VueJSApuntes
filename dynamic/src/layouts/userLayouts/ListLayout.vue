<template>
    <div>
        <h1>ListLayout</h1>
        <div class="container">
            <UserList v-for="(user,index) in props.content" :item="user" v-bind:key="index"></UserList>
        </div>
    </div>
</template>

<script setup lang="ts">
    import UserList from '@/components/UserList.vue';

    //import { defineProps } from 'vue';
    //lo comentamos porque no es necesario importar en vuecomposition https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
    const props = defineProps(['content']); //es un array con las diferentes propiedades que obtenemos

</script>

<style scoped>
    .container{
        width: 80%;
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        margin: auto;
    }
</style>
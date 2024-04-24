<template>
    <div class="list">
        <span class="name">{{ user.item.name }}</span>
        <span class="age">{{ user.item.age }}</span>
        <span class="position">{{ user.item.position }}</span>
    </div>
</template>

<script setup lang="ts">    
    let user = defineProps(['item']);
</script>

<style scoped>
    .list{
        display: flex;
        justify-content: space-evenly;
        padding: 20px;
        border: 1px solid rgb(0, 0, 0);
        /* border-collapse: collapse; */
    }
</style>
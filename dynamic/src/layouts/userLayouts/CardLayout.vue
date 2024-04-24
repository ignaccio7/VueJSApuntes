<template>
    <div>
        <h1>CardLayout</h1>
        <div class="container">
            <UserCard v-for="(item, index) in props.content" :key="index" :content="item"></UserCard>
        </div>
    </div>
</template>

<script setup lang="ts">
    import UserCard from '@/components/UserCard.vue';

    let props = defineProps(['content']);
</script>

<style scoped>
    .container{
        padding: 20px;
        width: 80%;
        margin: auto;
        min-height: 20px;
        background-color: rgb(239, 239, 239);
        display: flex;
        justify-content: space-around;
        gap: 10px;
        flex-wrap: wrap;
    }
</style>
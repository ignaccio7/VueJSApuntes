<template>
    <div class="card">
        <div class="header">
            {{ user.content.name }}
        </div>
        <div class="description">
            {{ user.content.age }}
            {{ user.content.position }}
        </div>
    </div>

</template>

<script setup lang="ts">
    let user = defineProps(['content'])
</script>

<style scoped>
    .card{
        width: 250px;
        height: 100px;
        border: 1px solid rgb(101, 101, 156);
        display: flex;
        flex-direction: column;
        align-items: stretch;/**valor por defecto */
        justify-content: center;
    }
    .header{
        background-color: black;
        color: white;
        font-size: 1.2rem;
        padding: 10px;
    }
    .description{
        flex-grow: 1;
        text-align: center;
    }
</style>
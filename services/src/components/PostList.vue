<template>
    <div>
        <h1>Listado de Posts</h1>
        <ul class="posts-container">
            <li v-for="post in posts" v-bind:key="post.id"> {{ post.title }} </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    //import PostService from "@/services/PostService";
    import PostService from '@/services/PostServicets'
    import { onMounted } from "vue";

    const service = new PostService();
    const posts = service.getPosts;

    onMounted(async()=>{
        await service.fetchAll();
    });


</script>

<style scoped>
    .posts-container{
        width: 90vw;
        list-style: none;
        padding: 20px;
    }
    .posts-container li{
        padding: 10px;
        border: 1px solid rgb(160, 160, 160);
    }
</style>
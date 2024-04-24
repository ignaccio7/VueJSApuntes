<template>
    <div>
        <h1>Listado de posts</h1>
        <ul class="posts-container">
            <!--
            <li><router-link :to="{ name:'post', params:{ id:1 } }"> Primer Post </router-link> </li>
            <li><router-link :to="{ name:'post', params:{ id:2 } }"> Segundo Post </router-link> </li>
            -->
            <li v-for="(post,index) in posts" :key="post.id" class="post-detail">
                <router-link :to="{ name: 'post', params: { id: post.id } }">
                    {{ index+1 }} {{ post.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import PostService from '@/services/PostService';
import { onMounted } from 'vue';

const postsService = new PostService();
const posts = postsService.getPosts;

onMounted(async () => {
    await postsService.fetchAll();
});

</script>

<style scoped>
.posts-container {
    max-width: 80vw;
    margin: 0 auto;
    list-style: none;
}

.post-detail {
    padding: 10px;
    border: thin solid rgb(136, 136, 136);
}

a {
    color: rgb(37, 37, 37);
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
}
</style>
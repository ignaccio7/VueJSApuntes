<template>
    <div>
        <h1>List Posts</h1>
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                <RouterLink :to="{ name:'detail', params:{ id:post.id } }">
                    {{ post.title }}
                </RouterLink>
            </li>
        </ul>

    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { PostService } from '@/services/PostService'

const postService = new PostService();

onMounted(async () => {
    await postService.getData();
});

let posts = postService.getPosts;



</script>

<style scoped></style>
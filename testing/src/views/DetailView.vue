<template>
    <div>
        <h1>Detail</h1>
        <div class="card">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
        <router-link :to="{ name: 'post' }" class="link">Volver atras</router-link>
    </div>
</template>

<script setup lang="ts">
import { onMounted, Ref } from 'vue';
import { useRoute } from 'vue-router';
import PostService from '@/services/PostService';
import IPost from '@/interfaces/IPost';


const postService = new PostService();

onMounted(async () => {
    const route = useRoute();
    let elem = route.params.id;
    await postService.fetchById(elem);
});

let post: Ref<IPost> = postService.getPost;

</script>

<style scoped></style>
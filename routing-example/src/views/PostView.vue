<template>
    <div class="post-card">
        <h2>Post Numero : {{ post.id }}</h2>
        <hr>
        <h3>{{ post.title }}</h3>
        <hr>
        <p>{{ post.body }}</p>
    </div>
</template>

<script setup lang="ts">
    import PostService from '@/services/PostService';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const postService = new PostService();
    const post = postService.getPost;

    onMounted(async()=>{
        const route = useRoute();
        let elem = route.params.id;
        await postService.fetchById(elem);
    });

</script>

<style scoped>
    .post-card{
        width: 600px;
        margin: 20px auto;
        border: 1px solid #939393;
    }
</style>
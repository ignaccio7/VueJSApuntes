<template>
    <div class="container-posts">
        <PostCard v-for="post in listPosts" :key="post.title" 
        :title="post.title" :description="post.description"
        @sayHello="showAlert" />
    </div>
</template>

<script setup lang="ts">
import PostCard from './PostCard.vue';

interface Post {
    title: string,
    description: string
}

let listPosts:Array<Post> = [
    {
        title: "Titulo Post 1",
        description: "Descripcion post numero 1"
    },
    {
        title: "Titulo Post 2",
        description: "Descripcion post numero 2"
    },
    {
        title: "Titulo Post 3",
        description: "Descripcion post numero 3"
    },
]

const showAlert = (message:string)=>{
    alert(`hola desde componente con titulo : ${message}`);
}

</script>

<style scoped>
.container-posts {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>
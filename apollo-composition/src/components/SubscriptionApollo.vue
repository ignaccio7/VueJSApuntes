<template>
    <div>
        <h1>subscription</h1>
        <ul>
            <li v-for="(comment, index) in comments" :key="index">
                <b> {{ comment.name }} :</b>
                {{ comment.text }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { useSubscription } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import { ref, watch } from 'vue';

const { result:resultSubscription } = useSubscription(gql`
    subscription{
        commentCreated {
            name
            text
        }
    }
`,
()=>({
    //si tendriamos que enviar algun tipo de variable
}));

let comments = ref([]);

watch(
    resultSubscription,(data)=>{
        console.log("New comment received : ",data.commentCreated);
        comments.value.push(data.commentCreated);
    }
);


</script>

<style scoped></style>
<template>
    <div class="card-post">
      <h2>{{ props.title }}</h2>
      <p>{{ props.description }}</p>
      <input type="text" name="message" id="message" v-model="message">
      <button @click="handleClick">Saludando</button>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits, ref, Ref } from 'vue';
    //const props = defineProps(['title','description']);
    const props = defineProps({
        title:{ type:String, required:true },
        description: { type:String, required:false, default:'No enviamos contenido aqui' }
    })

    const emit = defineEmits(['sayHello']);

    let message:Ref<string> = ref("");

    const handleClick = ()=>{
        //emit('sayHello');
        emit('sayHello',`${props.title} dice : ${message.value}`);
    }    
    
</script>

<style scoped>
.card-post {
    width: 300px;
    min-height: 200px;
    height: auto;
    border: thin solid slategrey;
    margin-bottom: 20px;
}
</style>
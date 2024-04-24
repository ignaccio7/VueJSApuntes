<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login()">
            <input type="text" v-model="user" placeholder="Usuario" id="username"><br>
            <input type="text" v-model="pass" placeholder="Password" id="password"><br>
            <button type="submit">Enviar</button>
        </form>
        <div v-if="!success">
            <p>Wrong Credentials</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAuth } from '@/store/useAuth';
    import { ref } from 'vue';
    import router from '@/router';

    const store = useAuth();

    let success = ref(true);

    let user = ref(''),
        pass = ref('');

    const login = ()=>{        
        success.value = store.login(user.value, pass.value);        
        if (success.value) {
            router.push({name:'post'})
        }
    }
    

</script>

<style scoped>
    
</style>
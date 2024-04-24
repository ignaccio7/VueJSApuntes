<template>
    <div>
        <h1>Login - Firebase</h1>
        <div class="container-login">
            <div class="card-login">
                <div class="card-img">
                    <img src="https://picsum.photos/800/800/?image=20" alt="Imagen">
                </div>
                <div class="card-content-login">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="username" 
                                v-model="username">                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                            v-model="password">
                        </div>                        
                        <button type="submit" class="btn btn-primary mt-2"
                        @click.prevent="authUser">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

    let username = ref(''),password=ref('');

    const authUser=()=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth,username.value,password.value)
        .then(()=>{
            alert("exito!")
        })
        .catch((error)=>{
            
            console.log(error.message);
            
            alert("Error : "+error.message)
        })
    }
</script>

<style scoped>
    
</style>
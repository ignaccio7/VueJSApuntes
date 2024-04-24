<template>
    <div>
        <h1>Login - Backend</h1>
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
    import AuthService from '../services/AuthService'
    import { ref } from 'vue';

    let username = ref(''), password=ref('');    

    const authUser = async ()=>{
        const authService = new AuthService();
        const success = await authService.login(username.value,password.value);
        if (success) {
            alert('Correcto');
        } else {
            alert('Incorrecto');
        }
    }

</script>

<style>
.container-login {
    display: flex;
    justify-content: center;
    margin: 20px 40px;
    flex-direction: row;
}

.card-login {
    width: clamp(400px, 100%, 800px);
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    justify-content: flex-start;
}

.card-img {
    flex: 1 1 300px;
    height: 300px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.card-content-login {
    flex: 2 1 400px;

    & form {
        padding: 1rem;
    }

    .form-group label {
        color: rgb(59, 123, 201);
        font-weight: bold;
    }
}
</style>
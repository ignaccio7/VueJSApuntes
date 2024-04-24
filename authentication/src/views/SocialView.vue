<template>
    <div>
        <h1>Social - Login</h1>
        <div><button class="btn btn-lg btn-danger" @click="loginGoogle">Login with Google</button></div>
        <div><button class="btn btn-lg btn-primary" @click="loginFacebook">Login with Facebook</button></div>
        <div><button class="btn btn-lg btn-success" @click="loginTwitter">Login with Twitter</button></div>
        <div><button class="btn btn-lg bg-info" @click="loginGitHub">Login with Github</button></div>
    </div>
</template>

<script setup lang="ts">
    import { GoogleAuthProvider, signInWithPopup, getAuth, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth';

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const loginGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const credentials = GoogleAuthProvider.credentialFromResult(result)
            console.log(credentials);
            const token = credentials?.accessToken;
            console.log(token);            
            
            alert("Exito Google!");
        })
        .catch((error)=>{
            alert("Fallo Google");
            console.log(error);
            
        })
    }

    const facebookProvider = new FacebookAuthProvider();

    const loginFacebook = ()=>{
        signInWithPopup(auth, facebookProvider)
        .then((result)=>{
            // const credentials = GoogleAuthProvider.credentialFromResult(result)
            // console.log(credentials);
            // const token = credentials?.accessToken;
            // console.log(token);            
            console.log(result);
            
            alert("Exito Facebook!");
        })
        .catch((error)=>{
            alert("Fallo Facebook");
            console.log(error);
            
        })
    }

    const twitterAuthProvider = new TwitterAuthProvider()

    const loginTwitter = ()=>{
        signInWithPopup(auth, twitterAuthProvider)
        .then((result)=>{
            // const credentials = GoogleAuthProvider.credentialFromResult(result)
            // console.log(credentials);
            // const token = credentials?.accessToken;
            // console.log(token);            
            console.log(result);
            
            alert("Exito Twitter!");
        })
        .catch((error)=>{
            alert("Fallo Twitter");
            console.log(error);
            
        })
    }

    const githubAuthProvider = new GithubAuthProvider();

    const loginGitHub = ()=>{
        signInWithPopup(auth, githubAuthProvider)
        .then((result)=>{
            // const credentials = GoogleAuthProvider.credentialFromResult(result)
            // console.log(credentials);
            // const token = credentials?.accessToken;
            // console.log(token);            
            console.log(result);
            
            alert("Exito Github!");
        })
        .catch((error)=>{
            alert("Fallo Github");
            console.log(error);
            
        })
    }

</script>

<style scoped>
    div{
        padding: 10px;
    }
</style>
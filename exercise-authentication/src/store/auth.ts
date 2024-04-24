import { defineStore } from 'pinia'
//por convencion ponemos use para aclarar que es un hook del store 
//en el defineStore('<necesita un id>',{objeto del store })
//en las actions se puede hacer lo que se hacia mutaciones y acciones
//no necesitamos modulos ya que dividimos directamente diferentes stores
const useAuthStore = defineStore('auth',{
    state:()=>{
        return{
            token:null,
            baseURL: 'http://'
        }
    },
    getters:{

    },
    actions:{
        //name,email,password
        async register(){
            console.log("hola");
            
        },
        //user,password
        async login(){
            console.log("hola");
        },
        async createNote(){
            console.log("hola");
        },
        async listNote(){
            console.log("hola");
        }

    }
})

export default useAuthStore;

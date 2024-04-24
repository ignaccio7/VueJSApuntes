import { defineStore } from 'pinia';

//useCounterStore es el hook con el cual llamaremos a este store y counter por convencion se coloca el nombre del store que almacenaras
export const useCounterStore = defineStore('counter',{
    //en pinia solo existen tres funciones se podria decir state para declarar los estados getters para obtener los valores y actions que seran las funciones o procedimientos que usaremos ya sean asincronas o sincronas
    state:()=>{
        return {
            counter:1
        }
    },
    getters:{
        multi2: (state)=>state.counter*2
    },
    actions:{
        increment(val=1){
            this.counter += val;
        }
    },
    //una manera rapida de persistir todos los states es:
    //persist:true
    //pero podemos decidir que estados queremos persistir y lo podemos ver que lo almacena en el localStorage
    persist:{
        //podremos indicar como se almacena la informacion ej local,sesionstorage
        //en el session storage la informacion se elimina cuando cerramos la pestaña y el local el navegador
        storage:sessionStorage,
        //podemos decidir que estados persistir
        paths:['counter']
    }
})
<template>
    <div>
        <h1>Create Note</h1>
        <!-- <button @click="createComment({ name:'Nirg' , text: 'Hello from Vue'})">Generar Comentario</button> -->
        <button @click="createComment()">Generar Comentario</button>
    </div>
</template>

<script setup lang="ts">

    import { useMutation } from "@vue/apollo-composable";
    import gql from "graphql-tag";
    
    //let { mutate  } = useMutation(gql`  podria ser asi pero como podriamos estar realizando mas de una mutacion en un mismo componente podremos almacenar esta variable mutate en otra que nos convenga para que no exista duplicidad
    //onDone cuando la mutaciones haya terminado u onError en casode error
    let { mutate: createComment, loading: createCommentLoading, error, onDone, onError } = useMutation(gql`
        mutation($name: String!, $text: String!){
            createComment(name: $name, text: $text)
        }
    `,()=>({
        variables:{
            name:"Nirg",
            text:"Hi from vue again 6"
        },
        //supongamos que hacemos un registro y queremos actualizar la informacion -> debemos tener los datos cacheados
        //update(<va servir cuando tengamos datos cacheados>,<data:correspondientesAlaMutacion>)
        /*update:(cache,{data:{createComment}})=>{
            let data = cache.readQuery({query: getAllComments}); //podriamos estar obteniendo los resultados de la consulta getAllComments que tenemos cacheados al ejecutar la query pero aqui mandara error ya que no estamoshaciendo mas que una mutacion
            data = {
                ...data,
                commets:[
                    ...data.comments,
                    createComment//en caso de que el servidor estuviera devolviendo el objeto que agregamos
                    { //sino creamos el objeto
                        name:"", //nombre que se añadio
                        text:"" //texto que se añadio
                    }
                ]
            }
            //posteriormente podriamos sobreescribir los datos
            cache.writeQuery({query:getAllComments,data})
        }*/
    }));

    onDone((done)=>{
        console.log(done); //mensaje de que el elemento insertado       
    });

    onError((error)=>{
        console.log(error.message); //mensaje de error
        
    });
    
</script>

<style scoped>
    
</style>
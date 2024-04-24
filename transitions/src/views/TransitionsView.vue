<template>
    <div>
        <h1>Transitions View</h1>
        <img src="../assets/transitions.png" alt="transiciones" >
        <br><br><br>
        <!-- DE ESTA FORMA LE DECIMOS A VUE QUE ESTE ELEMENTO TENDRA UNA ANIMACION -->
        <button @click="show = !show">Mostrar / Ocultar</button>
        <Transition>
            <h1 v-if="show">Hello world animated</h1> 
        </Transition>   
        <br><br><br>
        Ahora como podremos hacer transiciones a grupos de elementos
        <h1>Lista con transiciones</h1>
        <input type="text" v-model="note" placeholder="Digita tu nota">
        <button @click="handleNote">Agregar Nota</button>
        <!--Como ahora es un grupo al elemento que vamos a proporcionar lo tenemos 
            que encerrar en un transition group -->
        <!-- <ul> -->  
            <KeepAlive>
        <TransitionGroup name="list" tag="ul">
            <li v-for="(note, index) in notes" :key="index">{{ note }}</li>
        </TransitionGroup>
    </KeepAlive>          
        <!-- </ul> -->
        
        <br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    let show = ref(false);

    const notes = ref<Array<string>>([]);
    let note = ref<string>('');

    const handleNote = ()=>{
        notes.value.push(note.value);
        note.value = "";
    }
    
</script>

<style scoped>
    img{
        max-width: 700px;
    }
    /* como funcionan las animaciones 
        ESTOS SON PARA LA ENTRADA CUANDO SE MONTE
        enter-from //opacity:0
        enter-active // opacity 2s ease
        enter-to //opacity 1
        ESTOS PARA LA SALIDA CUANDO SE DESMONTE
        leave-from //opacity:1
        leave-active // opacity 2s ease
        leave-to //opacity 0
    */
    /* .v-enter-from{
        opacity: 0;
    }
    .v-enter-active{
        transition: opacity 1s ease;
    } 
    .v-enter-to{
        opacity: 1;
    }

    .v-leave-from{
        opacity: 1;
    }
    .v-leave-active{
        transition: opacity 2s ease;
    }
    .v-leave-to{
        opacity: 0;
    }  
    se puede ver que el elemento desaparece del DOM y una manera mas resumida
    de hacer el mismo codigo es el de abajo
    */


    .v-enter-active, .v-leave-active{
        transition: opacity 0.5s ease;
    }
    .v-enter-from, .v-leave-to{
        opacity: 0;
    }
    /** el .v es un selector generico pero como nuestro
    transition group tiene el name */
    .list-enter-active, .list-leave-active{
        transition: all 1s ease-in-out;
    }
    .list-enter-from, .list-leave-to{
        opacity: 0;
        transform: translateX(30px);
    }


</style>
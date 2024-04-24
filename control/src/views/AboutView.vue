<template>
  <div class="about">
    <h1>About - Probando el V-lazy</h1>
    <div>
      <!-- <img src="https://picsum.photos/1280/960" alt="imagen"> -->
      <!-- loading la imagen que aparecera mientras este cargando la del src .. esa imagen del loading deberia estar en la carpeta public
      error la imagen en caso de error
      delay es el tiempo que le podemos dar para que comience a cargar la imagen del src -->
      <img v-lazy="{ 
        src:'https://picsum.photos/1280/960',
        loading:'logo.png',
        error:'logo.png',
        delay:500        
      }">
    </div>
    <br><br><br><br>
    <div>
      <img v-lazy="{ src:lazyOptions.src, lifecycle:lazyOptions.lifecycle, delay:lazyOptions.delay }">
    </div>
    
  </div>
</template>

<script setup lang="ts">
  import { ref, VNode } from 'vue';
  
  //que pasa si queremos modificar sus propiedades como el ciclo de vida
  //como nosotros estamos especificando aqui opciones entonces el lifecycle nosotros lo manipulamos ya no viene el por defecto
  const lazyOptions = ref({
    src:'https://picsum.photos/1280/960',
    delay:500,
    lifecycle:{
      loading:(el:VNode)=>{
        console.log("cargando imagen:"+el);
      },
      error:(el:VNode)=>{
        console.log("Error cargando imagen:"+el);
        el.src = "logo.png";
      },
      loaded:(el:VNode)=>{
        console.log("Imagen cargada:"+el);
      }
    }
  });

</script>

<style scoped>
  img{
    width: 700px;
    height: auto;
  }
  /* como agregamos estilos en el lazy loading */
  img[lazy=loading]{
    background-color: lightskyblue;
  }
  /* img[lazy=error]{
    
  }
  img[lazy=loaded]{
    
  } */
</style>

<!-- <template>
  <div class="container">
      <div class="auxbar">
        <AuxBar/>
      </div>
      <div class="main-container">
        <div class="menu">
          <MenuCollapase/>
        </div>
        <div class="main-content">
          <h2>Contenido principal en HomeView</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni dolores dolorum fugit sequi temporibus omnis eius. Molestias consequuntur eos porro necessitatibus accusantium eum. Voluptatibus consectetur consequatur ipsum impedit vel.</p>
        </div>
      </div>
  </div>
</template> -->
<template>
  <MainLayout>
    <h2>Contenido principal en HomeView</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni dolores dolorum fugit sequi temporibus omnis eius. Molestias consequuntur eos porro necessitatibus accusantium eum. Voluptatibus consectetur consequatur ipsum impedit vel.</p>    
  </MainLayout>    
  <h3> X position is:{{ x }} | Y position is: {{ y }} </h3>
</template>

<script setup lang="ts">
  import MainLayout from '@/layouts/MainLayout.vue'

  //import AuxBar from '@/components/AuxBar.vue';
  //import MenuCollapase from '@/components/MenuCollapase.vue';    

  // import { ref, onMounted, onUnmounted } from 'vue';

  // const x = ref(0);
  // const y = ref(0);

  // function update(event:any) {
  //   x.value = event.pageX;
  //   y.value = event.pageY;
  // }
  
  // onMounted(()=> window.addEventListener('mousemove',update));
  // onUnmounted(()=> window.removeEventListener('mousemove',update));

  import { useMouse } from '@/composables/useMouse'

  let { x, y } = useMouse();


</script>

<style scoped>
    
</style>

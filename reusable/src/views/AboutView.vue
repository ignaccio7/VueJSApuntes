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
          <h2>Contenido en AboutView</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni dolores dolorum fugit sequi temporibus omnis eius. Molestias consequuntur eos porro necessitatibus accusantium eum. Voluptatibus consectetur consequatur ipsum impedit vel.</p>
        </div>
      </div>
  </div>
</template> -->
<template>
    <MainLayout>
      <h2>Contenido en AboutView</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni dolores dolorum fugit sequi temporibus omnis eius. Molestias consequuntur eos porro necessitatibus accusantium eum. Voluptatibus consectetur consequatur ipsum impedit vel.</p>
    </MainLayout>
    <h3> X position is:{{ x }} | Y position is: {{ y }} </h3>
</template>

<script setup lang="ts">
  import MainLayout from '@/layouts/MainLayout.vue';
  //import AuxBar from '@/components/AuxBar.vue';
  //import MenuCollapase from '@/components/MenuCollapase.vue';    

  import { useMouse } from '@/composables/useMouse'

  let { x, y } = useMouse();

</script>

<style scoped>
    
</style>

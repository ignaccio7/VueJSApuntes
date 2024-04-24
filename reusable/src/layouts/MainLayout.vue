<template>
    <div class="container">
        <div class="auxbar">
          <AuxBar/>
        </div>
        <div class="main-container">
          <div class="menu">
            <MenuCollapase/>
          </div>
          <div class="main-content">
            <!-- donde nosotros coloquemos la etiqueta slot el contenido
            que agreguemos donde importemos se mostrara aqui es una manera de reutilizar etiquetas
            a este tipo de retulizacion se denomina reutilizacion declarativa -->
            <slot></slot>
            <!-- a este lo podriamos dejar sin nombre y el contenido que coloquemos sin identificar
            entraria aqui (pero tambien podriamos nombrarlo) -->            
          </div>
          <div class="aux-content">
            <!--cuando tenemos mas de 1 slot para diferenciarlos lo podemos hacer con el atributo name -->
            <slot name="aux"></slot>
          </div>
          <div class="footer-content">
            <slot name="footer"></slot>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import AuxBar from '@/components/AuxBar.vue';
    import MenuCollapase from '@/components/MenuCollapase.vue';    
</script>

<style scoped>
    .main-content{
      background-color: azure;
      
    }
    .aux-content{
      background-color: black;
      color: white;
    }
    .footer-content{
      background-color: darkolivegreen;
      color: white;      
    }
</style>
<template>
    <MainLayout>
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum ab blanditiis dolor molestiae perspiciatis, mollitia nesciunt cupiditate vero praesentium quam earum, esse, iste numquam magnam tenetur deleniti provident nulla.</p>
        <template v-slot:aux>            
            <h2>Contenido Auxiliar</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam est omnis hic voluptatem eaque repellendus quos alias modi dignissimos deleniti libero, nam assumenda ipsam, aperiam magni nisi, praesentium vitae et.</p>
        </template>
        <!-- se puede colocar envez de v-slot un # -->
        <template #footer>
            Este es un footer
        </template>
    </MainLayout>
</template>

<script setup lang="ts">
    import MainLayout from '@/layouts/MainLayout.vue';
    
</script>

<style scoped>
    
</style>
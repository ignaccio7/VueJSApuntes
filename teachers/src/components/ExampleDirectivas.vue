<template>
    <div class="container-directives">
        <div class="directiva-personalizada">
            <h3>Directiva Personalizada</h3>
            <p v-font-size>este es un parrafo de prueba tamaño 30 </p>
            <pre><code>v-font-size</code></pre>
        </div>
        <div class="directiva-personalizada-valores">
            <h3>Directiva Personalizada con valores</h3>
            <p v-custom-size="40">este es un parrafo de prueba tamaño 40</p>
            <pre><code>v-custom-size="40"</code></pre>
        </div>
        <div class="directivas-personalizadas-argumentos">
            <h3>Directiva Personalizada con argumentos</h3>
            <p v-custom-size-args:sm>este es un parrafo de prueba tamaño sm</p>
            <pre><code>v-custom-size-args:sm</code></pre>
            <p v-custom-size-args:md>este es un parrafo de prueba tamaño md</p>
            <pre><code>v-custom-size-args:md</code></pre>
            <p v-custom-size-args:lg>este es un parrafo de prueba tamaño lg</p>
            <pre><code>v-custom-size-args:lg</code></pre>
        </div>
        <div class="directivas-personalizadas-modificadores">
            <h3>Directiva Personalizada con modificadores</h3>
            <p v-custom-font.md.red>este es un parrafo de prueba tamaño md</p>
            <pre><code>v-custom-font.md.red</code></pre>
            <p v-custom-font.lg.blue>este es un parrafo de prueba tamaño lg</p>
            <pre><code>v-custom-font.md.blue</code></pre>
        </div>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style scoped>
    .container-directives{
        display: flex;
        justify-content: space-evenly;
    }
    .container-directives div{
        border: 1px solid rgb(83, 105, 119);
        width: 300px;
    }
    code{
        font-size: 15px;
        background-color: bisque;
    }
</style>
<template>
    <div>
        <h1>TableLayout</h1>        
        <table>
            <tr>
                <td>Nombre</td>
                <td>Edad</td>
                <td>Posicion</td>
            </tr>
            <UserRow v-for="(item, index) in props.content" :key="index" :user="item"></UserRow>
        </table>

        <br><br><br><br><br>

        <div class="artesanal">
            <div class="item">Item 1</div>
            <div class="item">Item 2</div>
            <div class="item">Item 3</div>
            <div class="item">Item 4</div>
            <div class="item">Item 5</div>
            <div class="item">Item 6</div>
            <div class="item">Item 7</div>
            <div class="item">Item 8</div>
            <div class="item">Item 9</div>
            <div class="item">Item 10</div>
            <div class="item">Item 11</div>
            <div class="item">Item 12</div>
            <div class="item">Item 13</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import UserRow from '@/components/UserRow.vue';

    const props = defineProps(['content']);

</script>

<style scoped>
    table{
        min-width: 1000px;
        margin: auto;
        border: 1px solid darkgray;
        border-collapse: collapse;
        & td{
            border: 1px solid white;
            background-color: black;
            color: white;
            padding: 10px;
        }
    }

    .artesanal{
        max-width: 1200px;
        margin: auto;
        min-height: 100px;
        background-color: honeydew;
        display: flex;
        flex-flow: row wrap;

    }
    .item{
        flex: 1 1 350px;
        padding: 10px;
        border: 1px solid black;
    }
</style>
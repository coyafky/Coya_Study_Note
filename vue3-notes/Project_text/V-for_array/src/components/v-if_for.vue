<template>
<div class="hello">
    <li v-for="(iten,index) in list" :key="index" v-if="index===9">

    </li>
</div>

</template>


<script setup>
import { ref } from 'vue';
const array = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

</script>
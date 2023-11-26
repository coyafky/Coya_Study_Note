<template>
<Card>
  <template #header>
    <h1>{{ text }}</h1>
  </template>
  <template #default>
    <h2>{{ text }}</h2>
  </template>
  <template #footer>
    <h3>{{ text }}</h3>
  </template>
</Card>


</template>


<script setup>
import Card from './components/Card.vue';
import { ref } from 'vue';
const text = ref('甘泽熙喜欢大奶奶');

</script>
<script setup>
import Card from './components/Card.vue';
import { ref } from 'vue';
const text = ref('Hello World');
let change = function(){
  text.value ="甘泽熙喜欢大奶奶"
}
</script>

<template>

<Card>
  <p>{{ text }}</p>
</Card>

<button @click="change">
change
</button>
</template>
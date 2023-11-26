<script setup>
import { ref, provide } from 'vue'
import Child from './components/child.vue'

// by providing a ref, the GrandChild
// can react to changes happening here.
const message = ref('hello')
provide('message', message)
</script>

<template>
  <input v-model="message">
  <Child />
</template>
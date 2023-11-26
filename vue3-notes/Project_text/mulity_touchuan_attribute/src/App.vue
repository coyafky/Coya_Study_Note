<script setup>
import child from './components/child.vue';

function say(){
  alert('hello')
}


</script>

<template>
  <child class="rounded" style="border: 1px solid blue;" title="纸片" @click="say">

  </child>
</template>
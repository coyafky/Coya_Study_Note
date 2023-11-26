<script setup>

import { ref } from 'vue';
import Child from './components/Child.vue';
function say(){
  alert('hello')
}
</script>



<template>
<Child class="rounded" style="border" title="纸片" @click="say">

</Child>
</template>
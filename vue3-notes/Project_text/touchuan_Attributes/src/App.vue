

<script setup>
import child from './components/child.vue';

function say(){
  alert('hello')
}

</script>


<template>
   <!-- 透传的属性（style，class，title）在子组件中并没有在 props 声明 -->
    <!-- 透传的事件（click）在子组件中并没有在 emits 声明 -->
<child class="rounded" style="border: 1px solid blue" title ="纸片" @click ="say" ></child>
</template>
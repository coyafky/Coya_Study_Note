<template>
    <div>
      <button @click="handleClick">点击我</button>
    </div>
   </template>
   
   <script>
   import { onMounted, ref } from 'vue';
   
   export default {
    setup() {
      const count = ref(0);
   
      const handleClick = () => {
        count.value++;
        console.log('按钮被点击了', count.value);
      };
   
      onMounted(() => {
        console.log('页面已加载');
      });
   
      return {
        count,
        handleClick,
      };
    },
   };
   </script>
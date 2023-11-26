<template>
    <div id="app">
      <p v-if="count === 0">Count is zero.</p>
      <p v-else-if="count < 0">Count is less than zero.</p>
      <p v-else-if="count > 0">Count is greater than zero.</p>
      <p v-else>Count is not a number.</p>
      <button @click="increase">Increase Count</button>
      <button @click="decrease">Decrease Count</button>
      <button @click="reset">Reset Count</button>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const count = ref(0);
  
      const increase = () => {
        count.value++;
      };
      
      const decrease = () => {
        count.value--;
      };
  
      const reset = () => {
        count.value = 0;
      };
  
      return {
        count,
        increase,
        decrease,
        reset
      };
    }
  };
  </script>
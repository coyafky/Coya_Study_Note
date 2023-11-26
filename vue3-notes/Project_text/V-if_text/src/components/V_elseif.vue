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
  export default {
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increase() {
        this.count++;
      },
      decrease() {
        this.count--;
      },
      reset() {
        this.count = 0;
      }
    }
  };
  </script>
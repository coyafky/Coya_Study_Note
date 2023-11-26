<template>
    <div id="app" @click="handleOuterClick">
      <button @click.stop="handleButtonClick">Click me</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const handleOuterClick = () => {
        console.log("Outer div was clicked");
      };
  
      const handleButtonClick = () => {
        console.log("Button was clicked");
      };
  
      return {
        handleOuterClick,
        handleButtonClick
      };
    }
  };
  </script>
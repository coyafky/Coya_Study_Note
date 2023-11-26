<template>
    <div id="app">
      <button @click="toggle">Toggle Message</button>
      <p v-if="showMessage">You can see this message if 'showMessage' is true.</p>
      <p v-else>You can see this message if 'showMessage' is false.</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      // Using 'ref' to create a reactive reference for 'showMessage'.
      const showMessage = ref(true);
      
      // A function to toggle the value of 'showMessage'.
      function toggle() {
        showMessage.value = !showMessage.value;
      }
  
      // Expose 'showMessage' and 'toggle' to the template.
      return { showMessage, toggle };
    }
  };
  </script>
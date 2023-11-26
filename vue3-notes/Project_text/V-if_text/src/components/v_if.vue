<template>
    <div id="app">
      <button @click="toggle">Toggle Message</button>
      <p v-if="showMessage">You can see this message if 'showMessage' is true.</p>
      <p v-else>You can see this message if 'showMessage' is false.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMessage: true
      };
    },
    methods: {
      toggle() {
        this.showMessage = !this.showMessage;
      }
    }
  };
  </script>
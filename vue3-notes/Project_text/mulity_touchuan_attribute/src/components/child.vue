<script setup>

</script>

<template>
   <button class="chip">
       普通纸片
   </button>

   <hr>

   <button class="chip" v-bind="$attrs">
       普通纸片
   </button>

   <hr>

   <button class="chip" v-bind="$attrs">
       普通纸片
   </button>
</template>

<style>
.chip {
   border: none;
   background-color: rgb(231, 231, 231);
   padding: 8px 15px;
}

.rounded {
   border-radius: 100px;
}
</style>
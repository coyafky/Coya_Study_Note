<template>
    <div class="container">
      <ShowName>
        <template #last="scoped">
            <p>
              {{ scoped.ppp }}
            </p>
        </template>
      
      </ShowName>
    </div>
</template>


<script setup>
import ShowName from './components/ShowName.vue';
</script>
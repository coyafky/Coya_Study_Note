<template>
<button>
   {{ props.text }}
</button>
</template>


<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    text:{
        type:String,
        default:'no text spec'
    }
});

console.log(props.text);

</script>
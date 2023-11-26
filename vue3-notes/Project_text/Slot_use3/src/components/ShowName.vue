<template>
    <div class="container">


        <slot name="last" :ppp="aaaa">

        </slot>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const aaaa = ref("hello world")

</script>


<style></style>

<script setup>

import { ref } from 'vue' 

let age = ref(20)
let nickname = ref('')

</script>

<template>
    
    <p>将用户输入的值转成数值 .number，懒更新 .lazy</p>
    <!-- 。number 将用户输入的值转成数值，如果用户输入的内容无法转成数字，将不会更新数据源 -->
    <!-- .lazy 在 change 跟新数据源，而不是 input  -->
    <input type="text" v-model.lazy.number="age">

    <hr>
    <p>去掉首尾空白字符</p>
    <input type="text" v-model.trim="nickname">

</template>
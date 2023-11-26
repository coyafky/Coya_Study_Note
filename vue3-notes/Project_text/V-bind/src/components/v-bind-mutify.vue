<script setup>

import {reactive} from 'vue'

let attrs = reactive({
    class: 'error',
    id: 'borderBlue'
})

</script>

<template>
    
    <!-- 直接使用 v-bind 来为元素绑定多个属性及其值 -->
    <button v-bind="attrs">我是一个普通的按钮</button>

</template>

<style>
    .error {
        background-color: rgb(167, 58, 58);
        color: white;
    }

    #borderBlue {
        border: 2px solid rgb(44, 67, 167);
    }
</style>
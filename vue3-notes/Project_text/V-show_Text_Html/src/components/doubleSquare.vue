<script setup>

import { reactive } from 'vue'

let student = reactive({
    name: 'Jack',
    desc: '<h3>我是来自中国的小朋友！</h3>'
})

</script>

<template>

    <!-- 插值表达式：在元素中的某一位置采用纯文本的方式渲染数据 -->
    <div>这是一个 DIV 元素，{{ student.name }},{{ student.desc }}</div>

</template>
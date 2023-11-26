<script setup>

import { reactive } from 'vue'

let student = reactive({
    name: 'Jack',
    desc: '<h3>我是来自中国的小朋友！</h3>'
})


</script>

<template>

    <!-- 使用v-html指令，将数据采用HTML语法填充其空元素中 -->

    <div v-html="student.name"></div>

    <!-- v-html：以 HTML 语法显示数据 -->
    <div v-html="student.desc"></div>

    <!-- 下面的代码会报错：div 元素不是空元素 -->
    <!-- <div v-html="student.name">这是原始的div数据</div> -->

</template>
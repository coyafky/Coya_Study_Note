<script setup>

    import { reactive } from 'vue'

    let student = reactive({
        name: 'Jack',
        desc: '<h3>我是来自中国的小朋友！</h3>'
    })
    
</script>

<template>

  <!-- 使用v-text指令，将数据采用纯文本方式填充其空元素中 -->
  
  <div v-text="student.name"></div>

  <!-- v-text：以纯文本的方式显示数据 -->
  <div v-text="student.desc"></div>

  <!-- 下面的代码会报错：div 元素不是空元素 -->
  <!-- <div v-text="student.name">这是原始的div数据</div> -->
   
</template>
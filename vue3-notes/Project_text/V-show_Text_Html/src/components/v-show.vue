<script setup>
import { ref } from 'vue'

let  isShow = ref(false);

let age = ref(18);
let week = ref(1);


</script>

<template>
    <input type="checkbox" v-model="isShow">
      <!-- 
        v-show：指令表达式为真时才会渲染该元素 
        无论该指令的表达式是否 true 或 false，该元素在元素中是保留该元素的
        为 true 时会删除该元素的 display:none 样式，为 false 时会给该元素添加 display:none 样式
    -->

    <h3 v-show="isShow">这是一个普通的标题标签</h3>
    <hr>
    年龄
    <input type="range" v-model="age">

    <h1 v-show="age<18">
        未成年
    </h1>

    <h2 v-show="age>=18&&age<35">
        青年
    </h2>


    <h3 v-show="age>=35&&age<60">
        中年
    </h3>

    <h4 v-show="age>=60">
        老年
    </h4>

    周几: <input type="range" min="1" max="7" v-model="week"> {{ week }}

    <!-- v-show：不可以配合 template 元素使用 -->
    <!-- <template v-show="week == 1 || week == 3 || week == 5 || week == 7">
        <h1>可以游泳</h1>
    </template>
    
    <template v-show="week == 12 || week == 4 || week == 6">
        <h1>不可以游泳</h1>
    </template> -->
</template>
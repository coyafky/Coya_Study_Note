<script setup>
import { ref } from 'vue'
// 课程
let subject = ref([
    { id: 1, name: 'Vue' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'UI设计' },
    { id: 4, name: 'Hadoop' },
    { id: 5, name: '影视后期' },
])
</script>

<template>
    <!-- 
        item in itmes
        item：值，当前循环的数组值
        itmes：循环的数组
     -->
    <h6>v-for 渲染数组， v-for="item in itmes"</h6>
    <ul>
        <li v-for="sub in subject">
            编号：{{ sub.id }} --- 名称：{{ sub.name }}
        </li>
    </ul>

    <hr>

    <!-- 解构对象 -->
    <h6>v-for 渲染数组， v-for="{ 解构…… } in itmes"</h6>
    <ul>
        <li v-for="{ id , name } in subject">
            编号：{{ id }} --- 名称：{{ name }}
        </li>
    </ul>

    <hr>
    <!-- 
        (value, index) in itmes
        value：值
        index：索引
        itmes：循环的数组
     -->
    <h6>v-for 渲染数组， v-for="(value, index) in itmes"</h6>
    <ul>
        <li v-for="(sub, index) in subject">
            编号：{{ sub.id }} --- 名称：{{ sub.name }} --- 索引：{{ index }}
        </li>
    </ul>

    <hr>

    <!-- 解构对象 -->
    <h6>v-for 渲染数组， v-for="({ 解构…… }, index) in itmes"</h6>
    <ul>
        <li v-for="({ id , name } , index) in subject">
            编号：{{ id }} --- 名称：{{ name }} --- 索引：{{ index }}
        </li>
    </ul>
</template>
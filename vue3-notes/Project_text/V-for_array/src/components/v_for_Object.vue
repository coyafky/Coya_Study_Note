<script setup>
import { ref, reactive } from 'vue'

let student = reactive({
    stuNum: '007',
    name: 'coya',
    age: '18',
    sex: '女'
})
</script>

<template>
    <!-- 
        value in object
        value：属性值
        object：循环的对象
     -->

    <ul>
        <li v-for="value in student">
            {{ value }}
        </li>
    </ul>

    <!-- 
        (value, name) in object
        value：属性值
        name：属性名
        object：循环的对象
     -->

    <ul>
        <li v-for="(value, name) in student">
            属性名 :{{ name }} 属性值：{{ value }}
        </li>
    </ul>


    <!-- 
        (value, name, index) in object
        value：属性值
        name：属性名
        index: 索引
        object：循环的对象
     -->

    <ul>

        <li v-for="(value, name, index) in student">
            属性名 :{{ name }} 属性值：{{ value }} 索引：{{ index }}
        </li>
    </ul>
</template>
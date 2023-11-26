<script setup>

import { ref } from 'vue' 

let inputText = ref('ABC')  // 单行文本框
let message = ref('本次更新有以下几点：……') // 多行文本框
let open = ref(true) // 开灯（复选框）
let determine = ref('不确定') // 是否确定（复选框）
let likes = ref(['YMQ']) // 兴趣爱好（复选框）
let sex = ref('woman') // 性别（单选按钮）
let level = ref('B') //  // 证书等级（单选下拉框）
let city = ref(['苏C', '苏B']) // 去过的城市（多选下拉框）

</script>

<template>

    <!-- 单行文本框 -->
    <input type="text" v-model="inputText">

    <hr>
    <!-- 多行文本框 -->
    <textarea v-model="message"></textarea>

    <hr>
    <!-- 默认情况下，复选框的值：true/false -->
    <input type="checkbox" v-model="open"> 灯

    <hr>
    <!-- 自定义复选框值： true-value/false-value -->
    <input type="checkbox" true-value="确定" false-value="不确定" v-model="determine"> 是否确定

    <hr>
    <input type="checkbox" value="LQ" v-model="likes"> 篮球
    <input type="checkbox" value="ZQ" v-model="likes"> 足球
    <input type="checkbox" value="YMQ" v-model="likes"> 羽毛球
    <input type="checkbox" value="PPQ" v-model="likes"> 乒乓球

    <hr>
    <input type="radio" value="man" v-model="sex"> 男
    <input type="radio" value="woman" v-model="sex"> 女

    <hr>
    证书等级：
    <select v-model="level">
        <option value="C">初级</option>
        <option value="B">中级</option>
        <option value="A">高级</option>
    </select>

    <hr>
    去过的城市：
    <select multiple v-model="city">
        <option value="苏A">南京</option>
        <option value="苏B">无锡</option>
        <option value="苏C">徐州</option>
        <option value="苏D">常州</option>
    </select>

</template>
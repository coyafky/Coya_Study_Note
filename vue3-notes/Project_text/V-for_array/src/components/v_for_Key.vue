<script setup>
// 通过key来管理状态
import { ref } from 'vue'
// 课程
let subject = ref([
    { id: 1, name: 'Vue' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'Hadoop' }
])
function addSubject(){
    subject.value.push({ id: subject.value.length + 1, name: 'Java' })
}

</script>


<template>
<button @click ="addSubject"> 
添加课程
</button>

<h3>不使用key值</h3>
<ul>
    <li v-for="sub in subject">
        <input type="checkbox">
        {{ sub }}
    </li>
</ul>

<h3>使用索引当key值</h3>
<ul>
    <li v-for="(sub,index) in subject">
        <input type="checkbox" >
        {{ sub }}
    </li>
</ul>


<h3>使用列表属性当key值（该属性必须再此列表中唯一）</h3>

<ul>
    <li v-for="sub in subject" :key ="sub.id">
        <input type="checkbox">
        {{ sub }}
    </li>
</ul>

</template>
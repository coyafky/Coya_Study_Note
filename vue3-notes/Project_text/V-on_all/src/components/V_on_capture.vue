<script setup>
// 打招呼
function say(name) {
    console.log('你好：' + name)
}
</script>

<template>
    <!-- 
        .capture 给元素添加一个监听器
        1：当元素事件产生冒泡时，先触发的是该修饰符的元素的事件
        2：如果有多个该修饰符，则由外向内依次触发
     -->
    <div class="divArea" @click.capture="say('DIV-1')">
        <div class="divArea" @click="say('DIV-2')">
            <div class="divArea" @click.capture="say('DIV-3')">
                <button>我是一普通的按钮</button>
            </div>
        </div>
    </div>
</template>

<style>
.divArea {
    padding: 30px;
    border: 2px solid blue;
}
</style>
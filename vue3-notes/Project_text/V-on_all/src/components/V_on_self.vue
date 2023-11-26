// .self 只有在event.target是当前元素自身时触发事件处理函数

<script setup>
// 打招呼
function say(name) {
    window.alert('你好：' + name)
}
</script>

<template>
    <!-- .self：只在该元素上触发事件有效，其子元素无效 -->
    <div class="divArea" @click.self="say('DIV')">
        <button>我是一普通的按钮</button>
    </div>
</template>

<style>
.divArea {
    padding: 30px;
    border: 2px solid blue;
}
</style>
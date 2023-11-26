<script setup>
function eventPrevent() {
    // 阻止事件默认行为
    event.preventDefault()
}
</script>

<template>
    <!-- .passive：先执行默认行为，不考虑执行的代码中是否包含 event.preventDefault() -->
    <a href="http://www.baidu.com" @click.passive="eventPrevent">百度</a>
</template>
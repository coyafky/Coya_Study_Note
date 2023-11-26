<script setup>
import { ref ,defineOptions} from 'vue'
defineOptions({
    inheritAttrs: false,
})

</script>

<template>
    <!-- 
        当子组件只有一个根元素时，透传属性和事件会自动添加到该根元素上
        如果根元素已有 class 或 style 属性，它会自动合并
     -->
    <button class="chip" style="box-shadow: 0 0 8px grey;">普通纸片</button>

</template>

<style>
.chip{
    border: none;
    background-color: rgb(red, green, blue);
    padding: 8px 15px;
}

.rounded{
    border-radius: 25px;
}
</style>
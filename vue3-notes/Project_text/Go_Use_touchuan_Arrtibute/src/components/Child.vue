<script setup>
import { ref } from 'vue';
import { useAttrs } from 'vue';
let attrs = useAttrs();

function showAttrs() {
    console.log(attrs)
    console.log(attrs.class)
    console.log(attrs.title)
    console.log(attrs.style)
    attrs.onClick()
}

</script>


<template>
     <button class="chip" v-bind="attrs">
        普通纸片
    </button>

    <hr>

    <h6>{{ attrs }}</h6>

    <ul>
        <li>{{ attrs.title }}</li>
        <li>{{ attrs.class }}</li>
        <li>{{ attrs.style }}</li>
    </ul>

    <button @click="attrs.onClick()">执行透传的事件</button>

    <hr>

    <button @click="showAttrs">在 JS 中访问透传的属性和事件</button>
</template>

<style>
.chip {
    border: none;
    background-color: rgb(231, 231, 231);
    padding: 8px 15px;
    margin: 10px;
}

.rounded {
    border-radius: 100px;
}
</style>
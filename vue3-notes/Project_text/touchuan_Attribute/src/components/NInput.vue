<script setup>
import { useAttrs } from "vue";
// 自定义属性
defineProps(["modelValue"]);
// 自定义事件
defineEmits(["update:modelValue"]);

// 取消自动透传
defineOptions({
    inheritAttrs: false,
});

// 获取所有需要透传的事件和属性
const attribute = useAttrs();

// 需要输入框透传的属性和事件
const { placeholder, type } = attribute;
const inputAttr = { placeholder, type };

// 需要按钮透传的属性和事件
const { onClick } = attribute;
const buttonAttr = { onClick };
</script>

<template>
    <div class="n-input">
        <!-- v-model，placeholder，type -->
        <input
            v-bind="inputAttr"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <!-- onClick -->
        <button v-bind="buttonAttr">搜索</button>
    </div>
</template>

<style>
div.n-input {
    border: 1px solid black;
    padding-left: 12px;
    border-radius: 4px;
    height: 36px;
    background-color: rgb(243, 243, 243);
}

:root {
    --input-button-width: 70px;
}

div.n-input > button {
    width: var(--input-button-width);
    height: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
}

div.n-input > input {
    width: calc(100% - var(--input-button-width) - 24px);
    border: none;
    background: transparent;
}

div.n-input > input:focus {
    outline: none;
}
</style>
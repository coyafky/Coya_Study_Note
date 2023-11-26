<script setup>
import { ref } from "vue";
import NInput from "./components/NInput.vue";

// 输入框的类型
const inputType = ref("date");
// 输入框的数据
const inputData = ref("");
// 输入框的提示语句
const inputPlaceholder = ref("请输入……");

// 按钮点击后的需要执行的函数
const sayHello = () => {
    console.log("你好！");
};
</script>

<template>
    <div style="width: 400px;">
        <n-input
            v-model="inputData"
            :placeholder="inputPlaceholder"
            :type="inputType"
            @click="sayHello"
        ></n-input>
    </div>
    {{inputData}}
</template>
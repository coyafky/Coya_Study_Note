<script setup>
    function sayName(name){
        window.alert("helllo "+ name)
    }
</script>

<template>
<button @click.once ="sayName()">
    点击我一次
</button>
</template>
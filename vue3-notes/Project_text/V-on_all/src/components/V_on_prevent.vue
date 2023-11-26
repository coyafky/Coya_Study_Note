<script setup>
function say(name){
    window.alert("hello"+name)
}

</script>

<template>
    <a href="https://twitter.com/home?lang=ko" @click.prevent ="say('twi')">推特</a>
</template>
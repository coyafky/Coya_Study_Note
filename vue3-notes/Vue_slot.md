## slot

组件通过插槽类分发内容

在某些场景中，我们可能想要为子组件传递一些模板片段，让子组件在它们的组件中渲染这些片段，为此 vue 提供了组件的插槽
什么是插槽
在封装组件时，可以使用<slot>元素把不确定的、希望由用户指定的部分定义为插槽；插槽可以理解为给预留的内容提供占位符
插槽也可以提供默认内容，如果组件的使用者没有为插槽提供任何内容，则插槽内的默认内容会生效
注意：如果在封装组件时没有预留任何<slot>插槽，用户提供传递一些模板片段将会被遗弃

App.vue

```jsx
<script setup>
import Card from './components/Card.vue';
import { ref } from 'vue';
const text = ref('Hello World');
let change = function(){
  text.value ="甘泽熙喜欢大奶奶"
}
</script>

<template>

<Card>
  <p>{{ text }}</p>
</Card>

<button @click="change">
change
</button>
</template>
```

Card

```jsx
<template>
    <div class="crad">
        <img src="https://pbs.twimg.com/media/F_dGbrWbUAAy4bt?format=jpg&name=small" alt="">
    </div>
    <slot>

</slot>
</template>

<script setup>
</script>
```

slot 是在子组件处 （接受父组件传入的数据）这个数据可以定制化

### 具名 slot

Vue3 的具名插槽是一种特殊的插槽类型，它使得我们可以在子组件内定义多个插槽，而且每个插槽都有特定的名称，父组件在使用子组件时可以针对具体的插槽插入不同的内容。

1. 如果在封装组件时需要预留多个插槽节点，则需要为每个<slot>插槽指定具体的 name 名称，这种带有具体名称的插槽叫做“具名插槽”
2. 没有指定 name 名称的插槽，会有隐含的名称叫做 default
3. 在<template>元素上使用 v-slot:slotName 或者#slotName 向指定的具名插槽提供内

APP.vue

```jsx
 <template>
<Card>
  <template #header>
    <h1>{{ text }}</h1>
  </template>
  <template #default>
    <h2>{{ text }}</h2>
  </template>
  <template #footer>
    <h3>{{ text }}</h3>
  </template>
</Card>

</template>

<script setup>
import Card from './components/Card.vue';
import { ref } from 'vue';
const text = ref('甘泽熙喜欢大奶奶');

</script>
```

Card

```jsx
<template>
    <div class="container">
       <header>
        <img src="https://pbs.twimg.com/media/F_IbH8JawAAfbhv?format=jpg&name=small" alt="">
        <slot name="header">

        </slot>
       </header>

       <main>
        <img src="https://pbs.twimg.com/media/F_dGbrWbUAAy4bt?format=jpg&name=small" alt="">
         <slot >

         </slot>
       </main>

       <footer>

        <img src="https://pbs.twimg.com/media/F_XvyYOaIAAYTS6?format=jpg&name=small" alt="">
         <slot name="footer">

         </slot>
       </footer>
    </div>
</template>

<style>
    footer{
        background-color: #333;
        color: #fff;
        padding: 10px;
    }

    header{
        background-color: #333;
        color: #fff;
        padding: 10px;
    }

    main{
        background-color: #fff;
        color: #333;
        padding: 10px;
    }

</style>
```

## 作用域插槽

如何在向插槽提供的内容时获得子组件域内的数据呢？

1. 在声明插槽时使用属性值的方式来传递子组件的数据，这种带有数据的插槽称之为作用域插槽
2. 在`<template>`元素上使用`v-slot:slotName="slotProps"`或`#slotName="slotProps"`的方式来访问插槽传递属性值
3. 如果没有使用`<template>`元素，而是直接在使用子组件中直接给默认插槽提供内容，我们可以在使用该子组件时用`v-slot="slotProps"`来接收该插槽传递的数据对象

**注意：**`<slot>`插槽上的`name`是一个`Vue`特别保留的属性，不会在作用域插槽中访问到

```jsx
<template>
    <div class="container">
      <ShowName>
        <template #last="scoped">
            <p>
              {{ scoped.ppp }}
            </p>
        </template>

      </ShowName>
    </div>
</template>

<script setup>
import ShowName from './components/ShowName.vue';
</script>
```

showname

```jsx
<template>
    <div class="container">

        <slot name="last" :ppp="aaaa">

        </slot>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const aaaa = ref("hello world")

</script>

<style></style>
```

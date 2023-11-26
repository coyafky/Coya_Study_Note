<script setup>
import Mybutton from './components/Mybutton.vue';
import { ref ,defineProps} from 'vue'
const props = defineProps();
const name = ref('coya');
const age = ref(18);

const handleclick =()=>{
  name.value = 'coya2';
  age.value =19;

}
</script>



<template>
<h1>
  My name is {{ name }} ,I am {{ age }} years old.
</h1>

<Mybutton @click =handleclick() >

</Mybutton>

</template>
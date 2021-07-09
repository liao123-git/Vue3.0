<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{counter + counter1}}
    <button type="button" @click="add">add</button>
    <button type="button" @click="add1">add</button>
    <HomeChild :propsName="counter" @minus-event="minusEvent" id="5"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HomeChild from './HomeChild.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HomeChild
  },
  data () {
    return {
      counter1: 0
    }
  },
  setup () {
    const counter = ref(0)

    const add = () => {
      counter.value++
    }

    const minusEvent = () => {
      counter.value--
    }

    return {
      counter,
      add,
      minusEvent
    }
  },
  methods: {
    add1 () {
      this.counter1++
    }
  }
})
</script>

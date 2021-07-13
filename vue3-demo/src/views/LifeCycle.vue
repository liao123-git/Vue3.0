<template>
  <h1>Life Cycle</h1>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'

export default defineComponent({
  name: 'LifeCycle',
  beforeCreate () {
    console.log('beforeCreate -> beforeCreate')
  },
  setup () {
    console.log('setup -> setup')

    const x = ref(0)
    const y = ref(0)

    onMounted(() => {
      console.log('setup -> onMounted')
    })

    onUpdated(() => {
      console.log('setup -> onUpdated x = ', x.value)
      console.log('setup -> onUpdated y = ', y.value)
    })

    window.setTimeout(() => {
      x.value = 1
      y.value = 4
    }, 2000)

    return {
    }
  },
  created () {
    console.log('created -> created')
  }
})
</script>

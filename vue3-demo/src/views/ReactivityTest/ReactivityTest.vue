<template>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="item of lists" :key="item.id">{{item.name}}</li>
  </ul>
  <button @click="set">set list index 0</button>
</template>

<script>
import { reactiveTest } from '@/views/ReactivityTest/ReactiveTest'
import { readonlyTest } from '@/views/ReactivityTest/ReaonlyTest'

export default {
  name: 'ReactiveTest',
  setup () {
    return {
      ...reactiveTest(),
      ...readonlyTest()
    }
  }
}
</script>

<style scoped>

</style>

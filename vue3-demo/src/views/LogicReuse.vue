<template>
  <div class="logicReuse">
    <h1>逻辑复用案例</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <hr>
    {{counter}}
    <hr>
    total is {{total}}
    <hr>
    <button type="button" @click="add">add</button>
    <button type="button" @click="minusEvent">minus</button>
    <button type="button" @click="modify">modify number</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { utils } from './LogicReuse'

export default defineComponent({
  name: 'LogicReuse',
  setup () {
    return {
      ...utils()
    }
  }
})
</script>

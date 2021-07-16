<template>
  <teleport to="#end-of-body" :disabled="!toggle">
    hello teleport to end of body
  </teleport>
  <teleport to="#end-of-body" :disabled="!toggle1" v-if="toggle1">
    hello teleport to end of body 1
  </teleport>
  <div>
    toggle value: {{toggle}}
  </div>
  <div>
    toggle1 value: {{toggle1}}
  </div>
  <div>
    This should be at the top.
  </div>
  <button @click="toggleHandler">toggle</button>
  <button @click="toggleHandler1">toggle1</button>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'App',
  components: {},
  setup() {
    const toggle = ref(false)
    const toggle1 = ref(false)

    const toggleHandler = () => {
      toggle.value = !toggle.value;
    }

    const toggleHandler1 = () => {
      toggle1.value = !toggle1.value;
    }

    return {
      toggle,
      toggleHandler,
      toggle1,
      toggleHandler1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <slot v-if="error" name="error" :err="error"></slot>
  <Suspense v-else>
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #fallback>
      <slot name="fallback"></slot>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from 'vue'

export default defineComponent({
  name: 'SuspenseWithError',
  setup () {
    const error = ref('')

    // 捕获错误
    onErrorCaptured((err) => {
      error.value = err as unknown as string
      return true
    })

    return {
      error
    }
  }
})
</script>

<style scoped>

</style>
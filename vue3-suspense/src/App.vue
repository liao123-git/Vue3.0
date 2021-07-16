<template>
  <SuspenseWithError>
    <template #error="{ err }">
      {{ err }}
    </template>
    <template #default>
      <User></User>
    </template>
    <template #fallback>
      loading...
    </template>
  </SuspenseWithError>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import User from '@/components/user.vue'
import SuspenseWithError from '@/components/SuspenseWithError.vue'

export default defineComponent({
  name: 'App',
  components: {
    User,
    SuspenseWithError
  }
})
</script>

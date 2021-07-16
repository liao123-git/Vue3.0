<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  async setup() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = ~~(Math.random() * 100)
        if (isSuccess % 2 === 0) {
          reject('error message!')
        } else {
          resolve('success message!')
        }
      }, 2000)
    })

    const message = await promise

    return {
      message
    }
  }
})
</script>

<style scoped>

</style>
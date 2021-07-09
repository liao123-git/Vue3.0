import { computed, ref, watch, watchEffect } from 'vue'

export const utils = () => {
  const counter = ref(0)
  const doubleCounter = ref(0)
  let num = 2

  const add = () => {
    counter.value++
    doubleCounter.value = counter.value * num
  }

  const minusEvent = () => {
    counter.value--
    doubleCounter.value = counter.value * num
  }

  watch(counter, (newVal, oldVal) => {
    console.log('utils -> counter newVal', newVal)
    console.log('utils -> counter oldVal', oldVal)
  })

  watch([counter, doubleCounter], (newVal, oldVal) => {
    console.log('utils -> all newVal', newVal)
    console.log('utils -> all oldVal', oldVal)
  })

  watchEffect(() => {
    const temp = counter.value * 2
    console.log('counter * 2 = ', temp)
  })

  const modify = () => {
    num = 3
  }

  return {
    counter,
    total: computed(() => counter.value * num),
    add,
    modify,
    minusEvent
  }
}

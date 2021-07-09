<template>
  <div>
    Home Child {{propsName}}
    <button type="button" @click="clickHandler">Minus</button>
  </div>
</template>

<script>
export default {
  name: 'HomeChild',
  props: ['propsName'],
  setup (props, { emit, attrs }) {
    console.log(attrs)

    const clickHandler = () => {
      emit('minus-event')
    }

    return {
      clickHandler
    }
  }
}
</script>

<style scoped>

</style>

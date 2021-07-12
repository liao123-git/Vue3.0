import { reactive, toRefs } from 'vue'

export const reactiveTest = () => {
  const reactiveList = [
    {
      id: 0,
      name: 'zhang san'
    },
    {
      id: 1,
      name: 'li si'
    }
  ]
  const state = reactive({
    title: 'Reactivity Test',
    lists: reactiveList
  })

  const stateRefs = toRefs(state)

  const set = () => {
    state.lists[0].name = 'changed'
    console.log(reactiveList)
  }

  return {
    ...stateRefs,
    set
  }
}

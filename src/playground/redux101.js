import { createStore } from 'redux'

const store = createStore((state = { count: 0 }) => {
  return state
})

let s = store.getState()

console.log(s)

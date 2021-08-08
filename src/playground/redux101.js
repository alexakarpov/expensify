import { createStore } from 'redux'

let action1 = {
  type: 'INCREMENT',
}
let action2 = {
  type: 'DECREMENT',
}
let action3 = {
  type: 'RESET',
}

const store = createStore((state = { count: 0 }, action) => {
  console.log('store creation - ', action)
  switch (action.type) {
    case 'INCREMENT':
      console.log('increment')
      return { count: state.count + 1 }
    case 'DECREMENT':
      console.log('decrement')
      return { count: state.count - 1 }
    case 'RESET':
      console.log('reset')
      return { count: 0 }
    default:
      return state
  }
})
store.dispatch(action1)
store.dispatch(action1)
store.dispatch(action1)
console.log(store.getState())

store.dispatch(action2)
console.log(store.getState())

store.dispatch(action3)
console.log(store.getState())

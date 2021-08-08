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
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(action1)
store.dispatch(action1)
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)

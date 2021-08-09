import { createStore } from 'redux'

let makeAction = (type, value = 1) => {
  return { type, value }
}

const reducer = (state = { count: 0 }, action) => {
  console.log('store creation - ', action)
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.value }
    case 'DECREMENT':
      return { count: state.count - action.value }
    case 'SET':
      return { count: action.value }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
}

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(makeAction('INCREMENT'))
store.dispatch(makeAction('INCREMENT', 10))
store.dispatch(makeAction('DECREMENT'))
store.dispatch(makeAction('RESET'))
store.dispatch(makeAction('SET', 333))

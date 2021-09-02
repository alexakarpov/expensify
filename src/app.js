import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import { Provider } from 'react-redux'

const store = configureStore()
store.dispatch(
  addExpense({ description: 'Water bill', amount: 50, createdAt: 129 })
)
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 90, createdAt: 126 })
)
store.dispatch(
  addExpense({ description: 'Coffee', amount: 40, createdAt: 123 })
)
store.dispatch(setTextFilter('bill'))

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'))
// }, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))

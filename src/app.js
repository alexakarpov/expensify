import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import moment from 'moment'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.dispatch(
  addExpense({ description: 'Water bill', amount: 4500, createdAt: 2000 })
)
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 3000 }))
store.dispatch(
  addExpense({ description: 'Rent', amount: 109500, createdAt: 4000 })
)

const state = store.getState()
console.log('all expenses:', state.expenses)
console.log(state.filters)
console.log('^active filters')
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log('visible expenses:', visibleExpenses)

console.log(moment.now())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

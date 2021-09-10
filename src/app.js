import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()
const state = store.getState()

store.dispatch(
  addExpense({ description: 'Water bill', amount: 4500, createdAt: 2000 })
)
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 3000 }))
store.dispatch(
  addExpense({ description: 'Rent', amount: 109500, createdAt: 4000 })
)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'

const store = configureStore()

console.log(store.getState())
ReactDOM.render(AppRouter, document.getElementById('root'))

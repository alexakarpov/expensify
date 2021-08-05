import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Hello from './components/Hello'
import Create from './components/Create'
import { BrowserRouter, Route } from 'react-router-dom'

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' exact={true} component={Hello} />
      <Route path='/create' component={Create} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'))

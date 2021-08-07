import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'

import Create from '../components/CreatePage'
import HelpPage from '../components/HelpPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import PageNotFound from '../components/PageNotFound'
import Header from '../components/Header'

const AppRouter = (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path='/' exact={true} component={ExpenseDashboardPage} />
        <Route path='/create' component={Create} />
        <Route path='/help' component={HelpPage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

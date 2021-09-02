import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <ol>
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })}
    </ol>
  </div>
)

const mapStateToProps = (state) => {
  console.log('EXPENSES:', state.expenses)
  console.log('FILTERS:', state.filters)
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList)

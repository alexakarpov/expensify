import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

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
    expenses: state.expenses,
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(ExpenseList)

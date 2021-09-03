import React from 'react'
import ExpenseForm from './ExpenseForm'

const EditExpensePage = (props) => (
  <div>
    <h2>the expense with id of {props.match.params.id}</h2>
    <ExpenseForm></ExpenseForm>
  </div>
)

export default EditExpensePage

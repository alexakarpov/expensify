import React from 'react'

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Edit Expense</h1>
      <p>with id of {props.match.params.id}</p>
    </div>
  )
}

export default EditExpensePage

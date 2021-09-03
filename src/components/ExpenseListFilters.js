import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters'
import { sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilters = (props) => (
  <div>
    <input
      type='text'
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value))
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          console.log('sorting by date')
          props.dispatch(sortByDate())
        } else if (e.target.value === 'amount') {
          console.log('sorting by amount')
          props.dispatch(sortByAmount())
        }
      }}
    >
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
      <option></option>
    </select>
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)

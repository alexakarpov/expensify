import { createStore, combineReducers } from 'redux'
import { v4 as uuid } from 'uuid'

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    note,
    description,
    amount,
    createdAt,
  },
})

const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id,
})

const expensesDefaultState = []

const expenseReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

const filtersDefaultState = {
  test: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined,
}

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
  })
)

store.subscribe(() => {
  console.log(store.getState())
})

const expense1 = store.dispatch(
  addExpense({ description: 'rent', amount: 100 })
)
const expense2 = store.dispatch(
  addExpense({ description: 'coffee', amount: 300 })
)

store.dispatch(removeExpense(expense1.expense.id))

const user = {
  name: 'Alex',
  age: 40,
}

console.log({
  ...alex,
})

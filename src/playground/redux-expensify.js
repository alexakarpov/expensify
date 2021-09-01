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

const editExpense = (id, obj) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates: obj,
})
// filter actions
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

const setStartDate = (num) => ({
  type: 'SET_START_DATE',
  startDate: num,
})

const setEndDate = (num) => ({
  type: 'SET_END_DATE',
  endDate: num,
})

const expensesDefaultState = []

const expenseReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((ex) =>
        ex.id === action.id ? { ...ex, ...action.updates } : ex
      )
    default:
      return state
  }
}

const filtersDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined,
}

const getVisibleExpenses = (expenses, { text, endDate, startDate, sortBy }) => {
  return expenses
    .filter((ex) => {
      const startDateMatch =
        typeof startDate !== 'number' || ex.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== 'number' || ex.createdAt <= endDate
      const textMatch = ex.description
        .toLowerCase()
        .includes(text.toLowerCase())
      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      } else return 0
    })
}

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      }
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
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(
    `total expenses: ${state.expenses.length}, visible: ${JSON.stringify(
      visibleExpenses
    )}, filters: ${JSON.stringify(state.filters)}`
  )
})

const expense1 = store.dispatch(
  addExpense({ description: 'rent', amount: 1000, createdAt: 1000 })
)
const expense2 = store.dispatch(
  addExpense({ description: 'coffee', amount: 30, createdAt: -1000 })
)

console.log('=================')
store.dispatch(editExpense(expense1.expense.id, { amount: 1200 }))
store.dispatch(sortByAmount())
// store.dispatch(setTextFilter('COF'))
// store.dispatch(setStartDate(-1999))
// store.dispatch(setEndDate(1999))
// store.dispatch(setEndDate(312))

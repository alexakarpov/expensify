import expensesReducer, {
  expensesReducerDefaultState,
} from '../../reducers/expenses'
import moment from 'moment'
import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('defaults are set correctly', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should add an expense', () => {
  const newExpense = addExpense({
    amount: 123,
    description: 'test expense',
    note: 'foo',
  })
  const state = expensesReducer(undefined, newExpense)
  expect(state).toHaveLength(1)
})

test('should remove an expense', () => {
  const newExpense = addExpense({
    amount: 123,
    description: 'test expense',
    note: 'foo',
  })
  let state = expensesReducer(undefined, newExpense)
  const toRemove = state[0]
  state = expensesReducer(state, removeExpense(toRemove.id))
  expect(state).toEqual([])
})

test('should edit an expense', () => {
  const newExpense = addExpense({
    amount: 123,
    description: 'test expense',
    note: 'foo',
  })
  let state = expensesReducer(undefined, newExpense)
  const toEdit = state[0]
  state = expensesReducer(state, editExpense(toEdit.id, { note: 'edited' }))
  expect(state[0].note).toEqual('edited')
})

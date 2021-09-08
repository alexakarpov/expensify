import expensesReducer, {
  expensesReducerDefaultState,
} from '../../reducers/expenses'
import moment from 'moment'
import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

import expenses from '../fixtures/expenses'

test('defaults are set correctly', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should add an expense', () => {
  const state = expensesReducer(
    expenses,
    addExpense({
      amount: 123,
      description: 'test expense',
      note: 'foo',
    })
  )
  expect(state).toHaveLength(4)
})

test('should remove an expense', () => {
  const state = expensesReducer(expenses, removeExpense('1'))
  expect(state.length).toEqual(2)
})

test('should edit an expense', () => {
  const state = expensesReducer(expenses, editExpense('1', { note: 'edited' }))
  expect(state[0].note).toEqual('edited')
})

test('should not edit an expense with wrong id', () => {
  const state = expensesReducer(expenses, editExpense('x', { note: 'edited' }))
  expect(state).toEqual(expenses)
})

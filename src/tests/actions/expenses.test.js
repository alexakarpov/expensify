import { addExpense, removeExpense, editExpense } from '../../actions/expenses'
import moment, { Moment } from 'moment'

test('should set up removeExpense action object', () => {
  const action = removeExpense('abc123')
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123',
  })
})

test('should set up editExpense action object', () => {
  const action = editExpense('abc123', { amount: 123 })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      amount: 123,
    },
  })
})

test('should set up addExpense action object with provided values', () => {
  const payload = {
    amount: 123,
    description: 'foo',
    note: 'bar',
    //rogue: 'hi',
    //createdAt: 1000,
  }

  const action = addExpense(payload)
  console.log(action)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...payload,
      createdAt: expect.any(Number),
      id: expect.any(String),
    },
  })
})

test('should set up addExpense action object with default values', () => {
  const payload = {}

  const action = addExpense(payload)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      note: '',
      description: '',
      amount: 0,
      createdAt: expect.any(Number),
      id: expect.any(String),
    },
  })
})

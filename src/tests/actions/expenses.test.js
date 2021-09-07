import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('should set up removeExpense action object', () => {
  const action = removeExpense({ id: 'abc123' })
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
    createdAt: 1000,
  }

  const action = addExpense(payload)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...payload,
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

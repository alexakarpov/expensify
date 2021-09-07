import selectExpenses from '../../selectors/expenses'

const expenses = [
  { id: 111, amount: 11, description: 'foo', note: 'FOO', createdAt: 70000 },
  { id: 222, amount: 22, description: 'bar', note: 'BAR', createdAt: 20000 },
  { id: 333, amount: 33, description: 'baz', note: 'BAZ', createdAt: 30000 },
]

test('test the selector test by text', () => {
  const res = selectExpenses(expenses, { text: 'bar' })
  expect(res).toHaveLength(1)
  expect(res[0].id).toBe(222)
})

test('test the selector test by startDate and endDate', () => {
  const res = selectExpenses(expenses, { startDate: 15000, endDate: 40000 })
  expect(res).toHaveLength(2)
  expect(res[0].id).toBe(222)
  expect(res[1].id).toBe(333)
})

test('order by amount', () => {
  const res = selectExpenses(expenses, { sortBy: 'amount' })
  expect(res.length).toBe(3)
  expect(res[0].id).toBe(333)
  expect(res[2].id).toBe(111)
})

test('order by date', () => {
  const res = selectExpenses(expenses, { sortBy: 'date' })
  expect(res.length).toBe(3)
  expect(res[0].id).toBe(111)
  expect(res[2].id).toBe(222)
})

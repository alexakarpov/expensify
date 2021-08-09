import { createStore, combineReducers } from 'redux'

const demoState = {
  expenses: [
    {
      id: 'qweaadsd23d',
      description: 'something',
      note: 'something else',
      amount: 12300,
      createdAt: 0,
    },
    filters: {
      test:"rent",
      sortBy: 'amount', //date or amount
      startDate: undefined,
      endDate: undefined
    }
  ],
}

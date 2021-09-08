import filtersReducer, {
  filtersReducerDefaultState,
} from '../../reducers/filters'
import moment from 'moment'

test('defaults are set correctly', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    ...filtersReducerDefaultState,
  })
})

test('should set sortByAmount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state).toEqual({
    ...filtersReducerDefaultState,
    sortBy: 'amount',
  })
})

test('should set sortBy to "date"', () => {
  const oldState = { ...filtersReducerDefaultState, sortBy: 'amount' }
  const state = filtersReducer(oldState, { type: 'SORT_BY_DATE' })
  expect(state.sortBy).toEqual('date')
})

test('should set text filter to "date"', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'qwerty',
  })
  expect(state.text).toEqual('qwerty')
})

test('should set startDate', () => {
  const startDate = moment()
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate,
  })
  expect(state.startDate).toEqual(startDate)
})

test('should set endDate', () => {
  const endDate = moment()
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate,
  })
  expect(state.endDate).toEqual(endDate)
})

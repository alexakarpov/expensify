import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter,
} from '../../actions/filters'
import moment from 'moment'

test('generating startDate filter object', () => {
  const action = setStartDate(moment(0))

  expect(action).toEqual({ type: 'SET_START_DATE', startDate: moment(0) })
})

test('generating endDate filter object', () => {
  const action = setEndDate(moment(0))

  expect(action).toEqual({ type: 'SET_END_DATE', endDate: moment(0) })
})

test('generating sortByAmount filter object', () => {
  const action = sortByAmount()

  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('generating sortByDate filter object', () => {
  const action = sortByDate()

  expect(action).toEqual({ type: 'SORT_BY_DATE' })
})

test('generating setTextFilter filter object', () => {
  const action = setTextFilter('testo')

  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: 'testo' })
})

test('generating setTextFilter filter clearing the text', () => {
  const action = setTextFilter()

  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: '' })
})

import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('renders the ExpenseForm without data', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  expect(wrapper).toMatchSnapshot()
})

test('renders the ExpenseForm with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}></ExpenseForm>)
  expect(wrapper).toMatchSnapshot()
})

test('renders error for an invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  expect(wrapper).toMatchSnapshot()

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('Should set description on input change', () => {
  const newValue = 'new description'
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value: newValue },
    })
  expect(wrapper.state('description')).toBe(newValue)
})

test('Should set note on textarea change', () => {
  const newValue = 'new note'
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  wrapper.find('textarea').simulate('change', {
    target: { value: newValue },
  })
  expect(wrapper.state('note')).toBe(newValue)
})

test('Should set amount on its input change', () => {
  const newValue = '12.12'
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value: newValue },
    })
  expect(wrapper.state('amount')).toBe(newValue)
})

test('Should ignore change to amount with bad value', () => {
  const newValue = '1.212'
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value: newValue },
    })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop on valid form submission', () => {
  const onSubmitSpy = jest.fn()

  let testEx = expenses[0]
  delete testEx.id

  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}></ExpenseForm>
  )
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  })
  expect(onSubmitSpy).toHaveBeenCalledWith(testEx)
})

test('should set new date on dateChange', () => {
  const wrapper = shallow(<ExpenseForm></ExpenseForm>)
  const now = moment()
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

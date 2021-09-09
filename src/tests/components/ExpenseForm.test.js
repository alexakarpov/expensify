import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

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

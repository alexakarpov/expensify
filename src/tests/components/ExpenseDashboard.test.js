import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import expenses from '../fixtures/expenses'

test('ExpenseDashboardPage renders', () => {
  const wrapper = shallow(<ExpenseDashboardPage />)

  expect(wrapper).toMatchSnapshot()
})

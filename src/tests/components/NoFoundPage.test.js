import React from 'react'
import NotFoundPage from '../../components/NotFoundPage'
import { shallow } from 'enzyme'

test('should render Not Found Page', () => {
  const wrapper = shallow(<NotFoundPage />)

  expect(wrapper).toMatchSnapshot()
})

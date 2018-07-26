import React from 'react'

import UserPage from '.'

test('render a label', () => {
  const wrapper = shallow(<UserPage />)
  expect(wrapper).toMatchSnapshot()
})

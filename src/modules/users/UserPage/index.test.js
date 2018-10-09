import React from 'react'

import UserPage from '.'

test('render a label', () => {
  const wrapper = shallow(<UserPage match={{ params: { userId: 'foo' }}} />)
  expect(wrapper).toMatchSnapshot()
})

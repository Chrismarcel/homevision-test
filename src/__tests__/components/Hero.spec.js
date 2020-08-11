/* eslint-disable comma-dangle */
import React from 'react'
import { shallow } from 'enzyme'
import Hero from '../../components/Hero'

describe('<Hero />', () => {
  const container = shallow(<Hero />)
  it('should display correct header text', () => {
    expect(container.find('.hero-header-lg').text()).toEqual('HomeVision')
    expect(container.find('.hero-header-sm').text()).toEqual(
      'Discover Real Estate listings and houses for sale'
    )
  })
})

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { shallow } from 'enzyme'
import ContentCard from '../../components/ContentCard'

const initialProps = {
  img: 'test-img.png',
  homeowner: 'Home Owner',
  address: 'Some random address',
  price: '200000',
}

describe('<ContentCard />', () => {
  const container = shallow(<ContentCard {...initialProps} />)
  it('should render ContentCard component given correct props', () => {
    expect(container.find('.image').prop('src')).toEqual(initialProps.img)
    expect(container.find('.homeowner').text()).toEqual(initialProps.homeowner)
    expect(container.find('.address').text()).toEqual(initialProps.address)
    expect(container.find('.price').text()).toEqual(initialProps.price)
  })
})

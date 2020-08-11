/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import Homepage from '../../components/Homepage'
import 'regenerator-runtime'

describe('<Homepage />', () => {
  const fetchHouses = jest.fn()
  const observe = jest.fn()
  const unobserve = jest.fn()

  window.fetch = jest.fn(() => Promise.resolve())
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
  }))

  let wrapper

  it('should run test', async () => {
    wrapper = mount(<Homepage onStateChange={fetchHouses} />)
    expect(wrapper.find('.container').length).toEqual(1)
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    })
    wrapper.update()
  })
})

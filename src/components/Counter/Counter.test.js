/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import Counter from './index'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders without error', () => {
    const wrapper = shallow(<Counter />)

    /* 
        The find() method uses similar syntax with CSS for finding elements 
        in this line, we make enzyme look for the custom data-test attribute
    */
    const CounterComponent = wrapper.find("[data-test='component-counter']")

    expect(CounterComponent.exists()).toBe(true)
})

test('renders increment button', () => {

})

test('renders counter display', () => {

})

test('counter display starts at 0', () => {

})

test('clicking button increments counter display', () => {

})

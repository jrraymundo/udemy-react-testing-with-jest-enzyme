/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import Counter from './index'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/*
    Reusable function for creating our wrapper
    it's usually helpful when you're testing more complex setups with a wrapper.
 */
const setup = () => shallow(<Counter />)

/*
    Reusable function for finding our elements
*/
const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
    const wrapper = setup()
    const CounterComponent = findByTestAttribute(wrapper, 'component-counter')
    expect(CounterComponent.length).toBe(1)
})

test('renders increment button', () => {
    const wrapper = setup()
    const CounterComponent = findByTestAttribute(wrapper, 'counter-button')
    expect(CounterComponent.exists()).toBe(true)
})

test('renders counter display', () => {
    const wrapper = setup()
    const CounterComponent = findByTestAttribute(wrapper, 'counter-display')

    expect(CounterComponent.exists()).toBe(true)
})

test('counter display starts at 0', () => {
    const wrapper = setup()
    const CounterComponent = findByTestAttribute(wrapper, '')
    // expect(CounterComponent.exists()).toBe(true)
})

test('clicking button increments counter display', () => {
    const wrapper = setup()
    const CounterComponent = findByTestAttribute(wrapper, '')
    // expect(CounterComponent.exists()).toBe(true)
})

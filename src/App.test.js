/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders without crashing', () => {
  const wrapper = shallow(<App />);

  // Useful method for printing the html representation of the wrapper
  // console.log(wrapper.debug())

  expect(wrapper.exists()).toBe(true)
});

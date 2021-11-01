import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Button from '../components/Button';
import ButtonPanel from '../components/ButtonPanel';
import NavBar from '../components/NavBar';

configure({ adapter: new Adapter() });

it('contains 3 navbar links', () => {
  const links = shallow(<NavBar />).find('li').length;
  expect(links).toBe(3);
});

it('contains 19 button links', () => {
  const wrapper = shallow(<ButtonPanel clickHandler={jest.fn()} />).find(Button).length;
  expect(wrapper).toBe(19);
});
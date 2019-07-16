import React from 'react';
import Game from '../src/components/Game';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays welcome message', () => {
  const wrapper = Enzyme.shallow(<Game />);
  expect(wrapper.contains(<h1>Welcome to Tic Tac Toe!</h1>)).toEqual(true);
});

import React from 'react';
import {Game} from '../src/components/Game';
import {Cell} from '../src/components/Cell';
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

it('displays 9 cells for a 3x3 board', () => {
  const wrapper = Enzyme.shallow(<Game />);
  expect(wrapper.find(Cell)).toHaveLength(9);
});

it('ability to mark board with X on click', () => {
  const wrapper = Enzyme.mount(<Game />);
  wrapper.find('[className="button"]').first().simulate('click');
  expect(wrapper.state().cells).toEqual(['X', "", "", "", "", "", "", "", ""]);
  wrapper.unmount();
});

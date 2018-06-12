import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import Minesweeper from '../Minesweeper.js';
import Box from '../Box.js';


describe('Shallow rendering test suite', () => {

	it('Smoke test: Minesweeper component renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Minesweeper />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('div mineWrap is present', () => {
		let wrapper = shallow(<Minesweeper />);
		expect(wrapper.find('.mineWrap')).toHaveLength(1);
	})
	it('Component contains h2', () => {
		let wrapper = shallow(<Minesweeper />);
		const h2 = <h2>Minröjning</h2>;
		expect( wrapper.contains(h2)).toBe(true);
	})
	test('div minesweeper is present', () => {
		let wrapper = shallow(<Minesweeper />);
		expect(wrapper.find('.minesweeper')).toHaveLength(1);
	})
	test('initial state test', () => {
		let wrapper = shallow(<Minesweeper />);
		expect( wrapper.state('result') ).toBe(0);
		expect( wrapper.state('listBox') ).toHaveLength(16);
	})
})//end of Calc komponent test suite

describe('Box component test suite', () => {
	var testList = [{mine: 2, open: true},
													 {mine: 1, open: false},
													 {mine: 1, open: false},
													 {mine: 1, open: true},
													 {mine: 1, open: false},
													 {mine: 2, open: false},
													 {mine: 1, open: false},
													 {mine: 1, open: false},
													 {mine: 1, open: false},
													 {mine: 1, open: true},
													 {mine: 1, open: false},
													 {mine: 1, open: false},
													 {mine: 1, open: false},
													 {mine: 2, open: false},
													 {mine: 1, open: false},
													 {mine: 2, open: false}];
	test('Box component is present', () => {
		let wrapper = mount(<Minesweeper />);
		expect(wrapper.find(Box)).toHaveLength(1);
	})
	test ('p is present', () => {
		let wrapper = mount(<Minesweeper />);
		expect(wrapper.find('p')).toHaveLength(1);
	})
	test ('p is not visible when result: 0', () => {
		let wrapper = mount(<Minesweeper />);
		wrapper.setState({ result: 0 });
		expect(wrapper.find('p').hasClass('invincible')).toEqual(true);
	})
	test ('p is visible when result: 1', () => {
		let wrapper = mount(<Minesweeper />);
		wrapper.setState({ result: 1 });
		expect(wrapper.find('p').hasClass('visible')).toEqual(true);
	})
	test ('when open: true, mine: 2 => box has class open and mine', () => {
		let wrapper = mount(<Minesweeper />);
		wrapper.setState({ listBox: testList });
		expect(wrapper.find('div.box').at(0).hasClass('open')).toEqual(true);
		expect(wrapper.find('div.box').at(0).hasClass('mine')).toEqual(true);
	})
	test ('when open: true, mine: 1 => box has class open', () => {
		let wrapper = mount(<Minesweeper />);
		wrapper.setState({ listBox: testList });
		expect(wrapper.find('div.box').at(3).hasClass('open')).toEqual(true);
	})
	test ('when open: false, mine: 1 => box has not class open and mine', () => {
		let wrapper = mount(<Minesweeper />);
		wrapper.setState({ listBox: testList });
		expect(wrapper.find('div.box').at(1).hasClass('open')).toEqual(false);
		expect(wrapper.find('div.box').at(1).hasClass('mine')).toEqual(false);
	})
	test ('when clicks closed box, it shoule have class open', () => {
		let wrapper = mount(<Minesweeper />);
		wrapper.setState({ listBox: testList });
		let box2 = wrapper.find('div.box').at(1);
		box2.simulate('click');
		expect(wrapper.find('div.box').at(1).hasClass('open')).toEqual(true);
	})
	test ('when clicks closed box, it shoule have class open', () => {
		let wrapper = mount(<Minesweeper />);
		wrapper.setState({ listBox: testList });
		let box6 = wrapper.find('div.box').at(5);
		box6.simulate('click');
		expect(wrapper.find('div.box').at(5).hasClass('mine')).toEqual(true);
	})
})//end of Calc komponent test suite





//

import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Calc from '../Calc.js';


describe('Shallow rendering test suite', () => {

	it('Smoke test: Calc component renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Calc />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('div calcWrap is present', () => {
		let wrapper = shallow(<Calc />);
		expect(wrapper.find('.calcWrap')).toHaveLength(1);
	})
	it('Component contains h2', () => {
		let wrapper = shallow(<Calc />);
		const h2 = <h2>Räknare</h2>;
		expect( wrapper.contains(h2)).toBe(true);
	})
	test('div formDiv is present', () => {
		let wrapper = shallow(<Calc />);
		expect(wrapper.find('.formDiv')).toHaveLength(1);
	})
	test('Input is present', () => {
		let wrapper = shallow(<Calc />);
		expect(wrapper.find('input')).toHaveLength(1);
	})
	test('2 button elements are present', () => {
		let wrapper = shallow(<Calc />);
		expect(wrapper.find('button')).toHaveLength(2);
	})

})//end of Calc komponent test suite

describe('Events test suite', () => {

	test('initial state test', () => {
		let wrapper = shallow(<Calc />);
		expect( wrapper.state('value') ).toBe('');
		expect( wrapper.state('clear') ).toBe(false);
		expect( wrapper.state('temp') ).toBe(0);
	})
	test('state value: empty string to 1 when + button clicked', () => {
			let wrapper = shallow(<Calc />);
			let btnPlus = wrapper.find('button').at(0);
			wrapper.setState({ value: '' });
			btnPlus.simulate('click');
			expect( wrapper.state('value') ).toBe(1);
	})
	test('state value: 1 to 2 when + button clicked', () => {
			let wrapper = shallow(<Calc />);
			let btnPlus = wrapper.find('button').at(0);
			wrapper.setState({ value: 1 });
			btnPlus.simulate('click');
			expect( wrapper.state('value') ).toBe(2);
	})
	test('state clear: false to true when - button clicked', () => {
			let wrapper = shallow(<Calc />);
			let btnMinus = wrapper.find('button').at(1);
			wrapper.setState({ clear: false });
			btnMinus.simulate('click');
			expect( wrapper.state('clear') ).toBe(true);
	})
	test('state value: 1 to 0 when - button clicked', () => {
			let wrapper = shallow(<Calc />);
			let btnMinus = wrapper.find('button').at(1);
			wrapper.setState({ value: 1 });
			btnMinus.simulate('click');
			expect( wrapper.state('value') ).toBe(0);
	})
	test('state value: 0 to 0 when - button clicked', () => {
			let wrapper = shallow(<Calc />);
			let btnMinus = wrapper.find('button').at(1);
			wrapper.setState({ value: 0 });
			btnMinus.simulate('click');
			expect( wrapper.state('value') ).toBe(0);
	})
	test('state value: empty string to 1 when enters 1 in input field', () => {
			let wrapper = shallow(<Calc />);
			let input = wrapper.find('input').at(0);
			wrapper.setState({ value: '' });
			input.simulate('change', {target: {value: 1}});
			expect( wrapper.state('value') ).toBe(1);
	})
	test('state value: 6 to 0 when enters string in input field', () => {
			let wrapper = shallow(<Calc />);
			let input = wrapper.find('input').at(0);
			wrapper.setState({ value: 6 });
			wrapper.setState({ temp: 0 });
			input.simulate('change', {target: {value: ''}});
			expect( wrapper.state('value') ).toBe(6);
			expect( wrapper.state('temp') ).toBe(0);
	})
	test('state value: 6 to 89 when temp is 89 and enters string in input field', () => {
			let wrapper = shallow(<Calc />);
			let input = wrapper.find('input').at(0);
			wrapper.setState({ value: 6 });
			wrapper.setState({ temp: 89 });
			input.simulate('change', {target: {value: ''}});
			expect( wrapper.state('value') ).toBe(89);
			expect( wrapper.state('temp') ).toBe(89);
	})
	test('if clear: true & value: 3 =>  clear: false & temp: 3', () => {
			let wrapper = shallow(<Calc />);
			let input = wrapper.find('input').at(0);
			wrapper.setState({ value: 3, clear: true });
			input.simulate('click');
			expect( wrapper.state('temp') ).toBe(3);
			expect( wrapper.state('clear') ).toBe(false);
	})
	test('if clear: false => nothing changes', () => {
			let wrapper = shallow(<Calc />);
			let input = wrapper.find('input').at(0);
			wrapper.setState({ value: 3 });
			wrapper.setState({ clear: false });
			input.simulate('click');
			expect( wrapper.state('value') ).toBe(3);
			expect( wrapper.state('clear') ).toBe(false);
	})
})//end of Calc komponent test suite





//

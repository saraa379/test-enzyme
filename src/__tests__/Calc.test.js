import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Calc from '../Calc.js';


describe('Calc component test suite', () => {

	it('Smoke test: Calc component renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Calc />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('shallow smoke test', () => {
		let wrapper = shallow(<Calc />);
	})
	test('initial state should be: value: empty string, clear: false, temp: 0', () => {
		let wrapper = shallow(<Calc />);
		expect( wrapper.state('value') ).toBe('');
		expect( wrapper.state('clear') ).toBe(false);
		expect( wrapper.state('temp') ).toBe(0);
	})
	test('Component contains h2', () => {
		let wrapper = shallow(<Calc />);
		const h2 = <h2>Component Räknare</h2>;
		expect( wrapper.contains(h2)).toBe(true);
	})
/*
	test('Calc contains div .calcWrap', () => {
	    let wrapper = shallow(<Calc />);
	    expect(wrapper.find('.calcWrap').length).to.equal(1);
	})*/


/*
	test('state from false to true when clicked', () => {
		let wrapper = shallow(<OnOff />);
		let button = wrapper.find('button').at(0);
		button.simulate('click');
		expect( wrapper.state('on') ).toBe( true );
	})
	test('state from true to false when clicked', () => {
		let wrapper = shallow(<OnOff />);
		wrapper.setState({ on: true });
		let button = wrapper.find('button').at(0);
		button.simulate('click');
		expect( wrapper.state('on') ).toBe( false );
	})*/


})//end of Calc komponent test suite
/*
describe('Input field test suite', () => {
		test('state from true to false when clicked', () => {
				let wrapper = shallow(<Calc />);
				wrapper.setState({ value: '' });
				let inputWrap = wrapper.find('input').at(0);
				input.simulate('change');
				expect( wrapper.state('on') ).toBe( false );
		})
})*///end of input field test suite




//

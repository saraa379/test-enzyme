import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import { mount } from 'enzyme';
import EditableList from '../EditableList.js';


describe('Shallow rendering test suite', () => {

	it('Smoke test:  EditableList component renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<EditableList />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('div editWrap is present', () => {
		let wrapper = shallow(<EditableList />);
		expect(wrapper.find('.editWrap')).toHaveLength(1);
	})
	it('Component contains h2', () => {
		let wrapper = shallow(<EditableList />);
		const h2 = <h2>Redigerbar Lista</h2>;
		expect( wrapper.contains(h2)).toBe(true);
	})
	test('div formEdit is present', () => {
		let wrapper = shallow(<EditableList />);
		expect(wrapper.find('.formEdit')).toHaveLength(1);
	})
	test('Input is present', () => {
		let wrapper = shallow(<EditableList />);
		expect(wrapper.find('input')).toHaveLength(1);
	})
	test('Button element btnAdd is present', () => {
		let wrapper = shallow(<EditableList />);
		expect(wrapper.find('#btnAdd')).toHaveLength(1);
	})
	test('Div listDiv is present when state.listEd has elements', () => {
		let wrapper = shallow(<EditableList />);
		wrapper.setState({ listEd: ['aaaa', 'bbbbb'] });
		expect(wrapper.find('.listDiv')).toHaveLength(1);
	})

})//end of Calc komponent test suite

describe('List rendering test suite', () => {

	test('Div item is present when state.listEd has elements with right key', () => {
	  let wrapper = mount(<EditableList />);
		wrapper.setState({ listEd: ['aaaa', 'bbbbb'] });
		expect(wrapper.find('.item')).toHaveLength(2);
		expect(wrapper.find('.item').at(1).key()).toBe('1');
	})
	test('p is present when state.listEd has elements', () => {
		let wrapper = mount(<EditableList />);
		wrapper.setState({ listEd: ['aaaa', 'bbbbb'] });
		expect(wrapper.find('p')).toHaveLength(2);
	})
	test('Button delete is present when state.listEd has elements', () => {
		let wrapper = mount(<EditableList />);
		wrapper.setState({ listEd: ['aaaa', 'bbbbb'] });
		expect(wrapper.find('.delete')).toHaveLength(2);
	})


})//end of Calc komponent test suite

describe('Events test suite', () => {

	test('initial state test', () => {
		let wrapper = shallow(<EditableList />);
		expect( wrapper.state('value') ).toBe('');
		expect( wrapper.state('listEd') ).toHaveLength(0);
	})
	test('state value: empty string to 1 when enters 1 in input field', () => {
			let wrapper = shallow(<EditableList />);
			let input = wrapper.find('input').at(0);
			wrapper.setState({ value: '' });
			input.simulate('change', {target: {value: 1}});
			expect( wrapper.state('value') ).toBe(1);
	})
	test('state value: 7 to m when enters m in input field', () => {
			let wrapper = shallow(<EditableList />);
			let input = wrapper.find('input').at(0);
			wrapper.setState({ value: '7' });
			input.simulate('change', {target: {value: 'm'}});
			expect( wrapper.state('value') ).toBe('m');
	})
	test('btnAdd adds input value into listEd when clicked', () => {
			let wrapper = shallow(<EditableList />);
			let btnAdd = wrapper.find('button').at(0);
			wrapper.setState({ value: 'aaaa' });
			btnAdd.simulate('click');
			expect( wrapper.state('value') ).toBe('');
			expect( wrapper.state('listEd') ).toEqual(['aaaa']);
	})
	test('btnAdd pressed when input value is empty => listEd unchanged', () => {
			let wrapper = shallow(<EditableList />);
			let btnAdd = wrapper.find('button').at(0);
			wrapper.setState({ value: '' });
			btnAdd.simulate('click');
			expect( wrapper.state('value') ).toBe('');
			expect( wrapper.state('listEd') ).toEqual([]);
	})
	test('btnDelete removes first item from listEd', () => {
			let wrapper = mount(<EditableList />);
			wrapper.setState({ listEd: ['aaaa', 'bbbb'] });
			let btnDelete = wrapper.find('.delete').at(0);
			btnDelete.simulate('click');
			expect( wrapper.state('listEd') ).toEqual(['bbbb']);
	})
	test('btnDelete removes second item from lisEd', () => {
			let wrapper = mount(<EditableList />);
			wrapper.setState({ listEd: ['aaaa', 'bbbb'] });
			let btnDelete = wrapper.find('.delete').at(1);
			btnDelete.simulate('click');
			expect( wrapper.state('listEd') ).toEqual(['aaaa']);
	})

})//end of Calc komponent test suite





//

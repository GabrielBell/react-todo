var expect= require('expect');
var React= require('react');
var ReactDOM= require('react-dom');
var TestUtils= require('react-addons-test-utils');
var $ = require('jquery');

import {TodoSearch}  from 'TodoSearch';

describe('TodoSearch', () => {
	
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});
	
	it('should dispatch SET_SEARCH_TEXT on input change', () => {
		var searchText= 'Dog';
		var spy= expect.createSpy();
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		};

		var todoSearch= TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		
		todoSearch.refs.searchText.value= searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);
		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
		var spy= expect.createSpy();
		var todoSearch= TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		var action = {
			type: "TOGGLE_SHOW_COMPLETED",
		};
		todoSearch.refs.showCompleted.checked= true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);
		expect(spy).toHaveBeenCalledWith(action);
	});

});
var expect= require('expect');
var React= require('react');
var ReactDOM= require('react-dom');
var TestUtils= require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList= require('TodoList');
var Todo= require('Todo');

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each todo item', () => {
		var todos= [{
			id: 1,
			text: 'Make Voicemail'
		},{
			id: 2,
			text: 'Check Mail'
		}];
		var todoList= TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		//scry searches for target component within parent component
		var todosComponent= TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponent.length).toBe(todos.length);
	});

	it('should render empty message if no todos', () => {
		var todos= [];
		var todoList= TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		//scry searches for target component within parent component
		 var $el = $(ReactDOM.findDOMNode(todoList));
		expect($el.find('.container__message').length).toBe(1);
	});

});
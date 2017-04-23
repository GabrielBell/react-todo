var expect= require('expect');
var React= require('react');
var ReactDOM= require('react-dom');
var {Provider} = require('react-redux');
var TestUtils= require('react-addons-test-utils');
var $ = require('jQuery');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';


describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each todo item', () => {
		var todos= [{
			id: 1,
			text: 'Make Voicemail',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		},{
			id: 2,
			text: 'Check Mail',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}];
		var store = configure({
			todos
		});
		var provider = TestUtils.renderIntoDocument(
			<Provider store = {store}>
				<ConnectedTodoList/>
			</Provider>
		);

		//scry searches for target component within parent component
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponent= TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

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
var React= require('react');
var TodoList= require('TodoList');
var AddTodo= require('AddTodo');
var id=3;

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Clean the yard'
				}
			]
		};
	},
	componentDidUpdate: function(prevProps, prevState) {

	},
	handleAddTodo: function(text) {
		console.log('new todo:', text);
		
	},
	render: function(){
		var {todos} = this.state;

		return(
			<div>
				<TodoList todos={todos}></TodoList>
				<AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
			</div>
		);
	}
});

module.exports= TodoApp;
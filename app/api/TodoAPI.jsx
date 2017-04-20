var $ = require('jquery');

module.exports = {
	setTodos: function(todos){
		if($.isArray(todos)){
			//localStorage only knows how to store strings
			localStorage.setItem('todos', JSON.stringify(todos));
			//return to differentiate succeful call
			return todos;
		}
	},
	getTodos: function(){
		var stringTodos= localStorage.getItem('todos');
		var todos= [];

		try{
			todos= JSON.parse(stringTodos);
		} catch (e){

		}

		return $.isArray(todos) ? todos: []; 
	},
	filterTodos: function(todos, showCompleted, searchText) {
		var filteredTodos= todos;
		// filter by showCompleted
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});
		// filter by searchText
		//filteredTodos = filteredTodos
		// Sort todos with non-completed first

		return filteredTodos;
	}
};
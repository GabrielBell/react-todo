var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp= require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// Make async call to firebase to fetch todos
store.dispatch(actions.startAddTodos());


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store= {store}>
  	<TodoApp/>
  </Provider>,
  document.getElementById('app'));










/*store.subscribe(() => {
	var state = store.getState();
	console.log('New state', state);
	TodoAPI.setTodos(state.todos);
});*/

// bulk add todos from local storage

/*var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));*/

var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

// deep freeze ensures that your reducers are pure functions
// 

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set search text', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			}

			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should flip showCompleted status', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			}

			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			
			var action = {
				type: 'ADD_TODO',
				todo: {
					id: 'abc123',
					text: 'Something to do',
					completed: false,
					createdAt: 9236847
				}
			};
		
			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);

		});

		it('should toggle todo.completed', () => {
			var todos = [
				{
					id: '123',
					text: 'Something',
					completed: true,
					createdAt: 123,
					completedAt: 125
				}
			];
			
			var action = {
				type: 'TOGGLE_TODO',
				id: '123'
			};
		
			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toEqual(undefined);
			

		});


		it('should add existing todos from local storage', () => {
			var todos = [
				{
					id: '111',
					text: 'Something',
					completed: false,
					createdAt: undefined,
					completedAt: 125
				}
			];
			var action = {
				type: 'ADD_TODOS',
				todos
			}
		
			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);

		});

	});
	
});
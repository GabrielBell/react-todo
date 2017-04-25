import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAlcZf-Jb0entHOBdDJd8l1WuLtitbUgLA",
    authDomain: "bell-todo-app.firebaseapp.com",
    databaseURL: "https://bell-todo-app.firebaseio.com",
    projectId: "bell-todo-app",
    storageBucket: "bell-todo-app.appspot.com",
    messagingSenderId: "642371027946"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Gabriel',
		age: 24
	}
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
	console.log('Todo added', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
	text: 'Pack your suitcase'
});


/*var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
	console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
	console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
	console.log('child_removed', snapshot.key, snapshot.val());
});*/
// push creates a new item at the current reference and returns that reference
// so you can add data to it. 
/*var newNoteRef = notesRef.push({
	text: 'Pack for Denver!'

});

console.log('Todo id', newNoteRef.key);
*/





// Storing Arrays
/* instead of something like:
	todos: [
		{
			id: '123',
			text: 'Film something'
		}
	]

	firebase stores arrays like:
	todos: {
		'123acds' : {
			text: 'Film something'
		}
	}
*/




// tells firebase to fetch database
// we can also fetch a subset of our data
/*firebaseRef.child('app').once('value').then((snapshot)=> {
	console.log('Got entire database', snapshot.val());
}, (e) => {
	console.log('Unable to fetch value', e)
});*/


// listen to changes to database
// since it fires multiple times we can't pass promise, we need callback
// it gets called once immediately as we attach listener
/*var logData = (snapshot) => {
	console.log('Got value', snapshot.val());
}

firebaseRef.on('value', logData);

// turn off listener
// firebaseRef.off();

firebaseRef.update({isRunning: false});*/










/*
	C : Create
	R : Remove
	U : Update
	D : Deleting
*/

// subsequent calls to set will wipe out previous data unless you 
// provide explicitly what data you want to be set through child
// set() & update() returns a promise
/*--------------------------------------------------------
2. UPDATE

	firebaseRef.child('app').update({
		name: 'React Todo App'
	});

*/
// update doesn't update nested levels so you either use child selector
// or multipath update like this 'app/version': 'React Todo Application'



/*firebaseRef.update({
	'app/name': 'React Todo Application',
	'user/age': 25
});*/

/*--------------------------------------------------------
3. REMOVE

	firebaseRef.child('app/name').remove();
	firebaseRef.update({
		isRunning: null
	})

*/




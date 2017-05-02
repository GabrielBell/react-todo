import firebase from 'firebase';

try {
	var config = {
	    
	    authDomain: "bell-todo-app.firebaseapp.com",
	    databaseURL: "https://bell-todo-app.firebaseio.com",
	    projectId: "bell-todo-app",
	    storageBucket: "bell-todo-app.appspot.com",
	    
  	};

  	firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

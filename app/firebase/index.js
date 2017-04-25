import firebase from 'firebase';

try {
	var config = {
	    apiKey: "AIzaSyAlcZf-Jb0entHOBdDJd8l1WuLtitbUgLA",
	    authDomain: "bell-todo-app.firebaseapp.com",
	    databaseURL: "https://bell-todo-app.firebaseio.com",
	    projectId: "bell-todo-app",
	    storageBucket: "bell-todo-app.appspot.com",
	    messagingSenderId: "642371027946"
  	};

  	firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
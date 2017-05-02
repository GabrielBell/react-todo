import firebase from 'firebase';

try {
	var config = {
<<<<<<< HEAD
	    apiKey: process.env.API_KEY,
	    authDomain: process.env.AUTH_DOMAIN,
	    databaseURL: process.env.DATABASE_URL,
	    storageBucket: process.env.STORAGE_BUCKET
=======
	    
	    authDomain: "bell-todo-app.firebaseapp.com",
	    databaseURL: "https://bell-todo-app.firebaseio.com",
	    projectId: "bell-todo-app",
	    storageBucket: "bell-todo-app.appspot.com",
>>>>>>> e687b27fa0f59547865dbfca3f3590ef178caf05
	    
  	};

  	firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

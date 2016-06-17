angular.module('app')

  .factory('AuthFactory', function($timeout){

    var config = {
      apiKey: "AIzaSyC_W2DmU1_tZXYzP_gnVHeMW3JPx-lqhxs",
      authDomain: "warrior-app.firebaseapp.com",
      databaseURL: "https://warrior-app.firebaseio.com",
      storageBucket: "warrior-app.appspot.com",
    };
    firebase.initializeApp(config);

    const users = {

    }

    let currentUser = null


    return {
      register(email, password) {
        console.log(email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        });
        return $timeout().then(() => (
          users[email] === password
            ? Promise.resolve(currentUser = email)
            : Promise.reject('Authentication Failed')
        ))
      },
      login(email, password) {
        console.log(email, password)
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        });
        return $timeout().then(() => (
          users[email] === password
            ? Promise.resolve(currentUser = email)
            : Promise.reject('Authentication Failed')
        ))
      },


      logout () {
        return $timeout().then(() => (
          currentUser = null
        ))
      },

      getUser () {
        return currentUser
      }
    }
  })



angular.module('app')

  .factory('AuthFactory', function($timeout,$http){

    var config = {
      apiKey: "AIzaSyC_W2DmU1_tZXYzP_gnVHeMW3JPx-lqhxs",
      authDomain: "warrior-app.firebaseapp.com",
      databaseURL: "https://warrior-app.firebaseio.com",
      storageBucket: "warrior-app.appspot.com",
    };
    firebase.initializeApp(config);

    const users = {

    };

    let currentUser = null;
    let currentTribe = null;


    // firebase.auth().onAuthStateChanged((user) => {
    //   console.log("auth state changed");
    //   if (user) {
    //     console.log("auth object here");
    //     var users = null;
    //     $http.get('https://warrior-app.firebaseio.com/tribes.json')
    //       .then((res) => {
    //         users = res.data;
    //         return users;
    //       })
    //       .then((users) => {
    //         for (var key in users) {
    //           if (users[key].uid === users.uid) {
    //             currentUser = users[key];
    //             console.log("currentUser: ", currentUser);
    //           }
    //         }
    //       })
    //     }
    // })

    return {

      login (email, password) {
       return $timeout().then(() => (
        firebase.auth().signInWithEmailAndPassword(email, password)
        ))
      },

      register (email, password) {
        return $timeout().then(() => (
        firebase.auth().createUserWithEmailAndPassword(email, password)
        ))
      },

      logout(logout) {
        return $timeout().then(() => (
        firebase.auth().signOut
        ))
      },



      sendTribeInfo(tribe) {
        console.log(tribe)

        $http.post('https://warrior-app.firebaseio.com/tribes.json', tribe)
        .then( function (data) {
          currentTribe = data.data.name;
          // console.log(currentTribe.data.name)
        })


      },

      // *****************************************
      // checkEmailsForTribes(email) {
      //   if email === tribe id get tribe object
      //     else register
      // }
      // *******************************************

      getCurrentTribe: function(){
        return currentTribe;
      },

      getUser: function(param) {
        if (param) {
          return currentUser[param];
        } else {
            return currentUser;
          }
      },

      getUserAuth: function() {
        return $q.when(firebase.auth().currentUser);
      }

    }
  })

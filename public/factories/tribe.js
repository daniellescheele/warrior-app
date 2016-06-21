angular.module('app')

  .factory('TribeFactory', function($timeout, $http, AuthFactory){

    return {
      create(emails)  {
        console.log(emails)
       return $timeout().then(() => (
        console.log("just because")
        ))
      },
      template(template) {
        return $timeout().then(() => (
          console.log("template added")
          ))
      },

      // getTribe() {
      //   // console.log(firebase.auth().currentUser.uid)
      // }
      updateTribeInfo(emails, template) {
        var tribeId = AuthFactory.getCurrentTribe();
        console.log("i need the emails", emails);
        console.log("i need the template", template)
        console.log("i need the tribe ID", tribeId)
        Object.assign(emails,{paperdoll:template})
       $http.patch(`https://warrior-app.firebaseio.com/tribes/${tribeId}.json`, emails)
      }

    }
  })


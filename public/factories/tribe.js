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
     defaultDoll(template) {
        var obj = {}
        var tribeId = AuthFactory.getCurrentTribe();
        var storage = firebase.storage()
        var storageRef = storage.ref();
        storageRef.child("headdress/" + template + "HD0.png").getDownloadURL()
        .then(function(url) {
        obj.headdressDefault = url
        $http.patch(`https://warrior-app.firebaseio.com/tribes/${tribeId}.json`, obj)
        })
        storageRef.child("cloak/CL1.png").getDownloadURL()
        .then(function(url) {
        obj.cloakDefault = url
        $http.patch(`https://warrior-app.firebaseio.com/tribes/${tribeId}.json`, obj)
        })
        storageRef.child("boots/BT1.png").getDownloadURL()
        .then(function(url) {
        obj.bootsDefault = url
        console.log("this is my obj", obj);
        $http.patch(`https://warrior-app.firebaseio.com/tribes/${tribeId}.json`, obj)
        })
        },



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


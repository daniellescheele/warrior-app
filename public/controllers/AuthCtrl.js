
angular.module('app')
  .controller('AuthCtrl', function ($uibModalInstance, $location, AuthFactory) {
   const auth = this
    auth.login = function () {
      AuthFactory.login(auth.email, auth.password)
        // .then(() => $location.path('/my_roles'))
        // .catch(() => alert('Login Failed'))
        $uibModalInstance.close(
        $location.path('/my_roles')
      )
    }
    auth.register = function () {
      var tribeObj;
      AuthFactory.register(auth.email, auth.password)
        // .then (()=> (AuthFactory.checkEmailsForTribes(auth.email)))
        //   .then(() => {
        //   firebase.database().ref('tribes').orderByChild('email1').equalTo(auth.email).once('value', (snapshot) => {
        //     var foundEmail = snapshot.val()
        //     if(foundEmail) {
        //       for(var key in foundEmail) {
        //         console.log(foundEmail)
        //       }
        //     }
        //   })
        // })
        .then (()=> {
          tribeObj = {
          tribes: auth.tribe,
          headdress: "",
          headdressDefault: "",
          cloak: "",
          cloakDefault: "",
          boots: "",
          bootsDefault: "",
          paperdoll: "",
          email1: auth.email,
          email2: "",
          email3: ""
          }

        })

        .then(() => (AuthFactory.sendTribeInfo(tribeObj)))
        // .then(() => (AuthFactory.checkEmailsForTribes(auth.email)))
        .then(() => (AuthFactory.login(auth.email, auth.password)))
        .then(() => {$location.path('/create_tribe')})
        .catch((error) => alert(error));
        $uibModalInstance.close(
        // $location.path('/create_tribe')
      )
    }
    auth.logout = function () {
      AuthFactory.logout(auth.logout)
    }

 })



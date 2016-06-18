
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
        .then (()=> {
          tribeObj = {
          tribes: auth.tribe,
          arrows: "",
          arrowsquote: "",
          cloak: "",
          cloakquote: "",
          flower: "",
          flowerquote: "",
          headdress: "",
          headdressquote: "",
          mask: "",
          maskquote: "",
          paperdoll: 0,
          tattoos: "",
          tattoosquote: "",
          email1: auth.email,
          email2: "",
          email3: "",
          email4: "",
          email5: "",
          email6: ""
        }

        })
        .then(() => (AuthFactory.sendTribeInfo(tribeObj)))
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



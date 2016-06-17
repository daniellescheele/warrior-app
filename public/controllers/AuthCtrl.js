
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
      AuthFactory.register(auth.email, auth.password)
        // .then(() => $location.path('/my_roles'))
        // .catch(() => alert('Login Failed'))
        $uibModalInstance.close(
        $location.path('/my_roles')
      )
    }

 })




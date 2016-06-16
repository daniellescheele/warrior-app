angular.module('app')
  .controller('LoginCtrl', function ($uibModal) {
    const login = this

  login.login = function() {
  	console.log("login running")
  	login.openModal = () => $uibModal.open({
   		templateUrl: "views/login-modal/loginmodal.html",
  		controller: "LoginCtrl",
   	 	controllerAs: "modal",
   	 	size: "size"

			})
  		console.log(login.openModal())

  }
 })


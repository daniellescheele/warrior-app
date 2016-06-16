angular.module('app', ["ui.bootstrap","ngRoute"] )
  .controller('MainCtrl', function ($uibModal) {
    const main = this

    main.heading = 'Nominate a Warrior'

		main.login = function() {
  	console.log("login running")
  		$uibModal.open({
   			templateUrl: "views/login-modal/loginmodal.html",
  			controller: "LoginCtrl",
   	 		controllerAs: "modal",
   	 		size: "size"
				})
		}
 		main.register = function() {
 			console.log("register running")

 			}
 		})


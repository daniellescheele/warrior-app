 angular.module('app', ['ui.bootstrap', 'ngRoute'] )

  .controller('MainCtrl', function ($uibModal) {
    const main = this

    main.heading = 'Nominate a Warrior'
    let loginModal = null;
    let registerModal = null;





		main.login = function() {
  	console.log("login running")
  		loginModal = $uibModal.open({
   			templateUrl: "views/login-modal/loginmodal.html",
  			controller: "AuthCtrl",
   	 		controllerAs: "auth"

				})
		}
	   main.register = function() {
 			console.log("register running")
        registerModal = $uibModal.open({
          templateUrl: "views/login-modal/registermodal.html",
          controller: "AuthCtrl",
          controllerAs: "auth"
        })

 			}
      $(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});
});
 		})


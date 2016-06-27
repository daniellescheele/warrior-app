angular.module('app')
  .controller('RoleCtrl', function (RoleFactory, $location, AuthFactory) {

   const role = this
   let roleChosen = null;
   let userId = firebase.auth().currentUser.uid;


    role.choose = function () {
      var tribeId;
      console.log("role chosen", role.img)
      roleChosen = role.img;
      console.log(userId, roleChosen);



    RoleFactory.choose(roleChosen)

      .then(() => (tribeId = AuthFactory.getCurrentTribe()))
      .then(() => (RoleFactory.addRole(userId,roleChosen,tribeId)))
      .then(() => {$location.path('/my_roles')})
      .catch((error) => alert('error'));
  }

})

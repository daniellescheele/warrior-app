angular.module('app')
  .controller('RoleCtrl', function (RoleFactory, AuthFactory) {

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
      // .then(() => {$location.path})
      .catch((error) => alert('error'));
  }

})

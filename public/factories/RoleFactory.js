angular.module('app')

  .factory('RoleFactory', function($timeout, $http){
    // $http, AuthFactory

    return {
      choose(role)  {
        console.log(role)
       return $timeout().then(() => (
        console.log("role has been chosen")
        ))

      },

        addRole(userId,roleChosen,tribeId) {
          console.log(userId,roleChosen,tribeId);
          var role = {};
          role[roleChosen] = userId
          console.log(role)
          $http.patch(`https://warrior-app.firebaseio.com/tribes/${tribeId}.json`, role)
          .then((res) => {
            console.log(res)
          })
        }
      }
  })

      // Object.assign(roleChosen, {roleChosen: userId})
      // console.log(roleChosen);
      // console.log(userId);

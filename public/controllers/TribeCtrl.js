angular.module('app')
  .controller('TribeCtrl', function (TribeFactory) {
   const tribe = this

    tribe.create = function () {
      console.log("submit clocked")
      var invites = {
        email2: tribe.invite1,
        email3: tribe.invite2,
        email4: tribe.invite3,
        email5: tribe.invite4,
        email6: tribe.invite5
      };
      console.log(invites)
        TribeFactory.create(invites)
        .then(() => $location.path('/roles'))
        .catch(() => alert('Login Failed'))
    }
  })
// build up an email  object and call it

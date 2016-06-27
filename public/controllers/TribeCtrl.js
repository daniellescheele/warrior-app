angular.module('app')
  .controller('TribeCtrl', function (TribeFactory, $location) {
   const tribe = this
   let template = null;


    tribe.template = function () {
      console.log("template picked",tribe.imgtemplate)
      template = tribe.imgtemplate;
      console.log("template is", template)
    }

    tribe.create = function () {
      console.log("submit clocked")
      var invites = {
        email2: tribe.invite1,
        email3: tribe.invite2,
        email4: tribe.invite3

      };

     TribeFactory.create(invites)
        .then(() => (TribeFactory.template(template)))
        .then(() => (TribeFactory.updateTribeInfo(invites, template)))
        .then(() => {$location.path('/my_roles')})
        .catch((error) => alert('error'));
    }
  })
// build up an email  object and call it

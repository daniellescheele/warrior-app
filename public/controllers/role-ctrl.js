angular.module('app')
  .controller('RoleCtrl', function () {
   const role = this
   let roleChosen = null;



    role.choose = function () {
      console.log("role chosen", role.img)
      roleChosen = role.img;
      console.log("role is", roleChosen)
    }

  })

//     tribe.create = function () {
//       console.log("submit clocked")
//       var invites = {
//         email2: tribe.invite1,
//         email3: tribe.invite2,
//         email4: tribe.invite3,
//         email5: tribe.invite4,
//         email6: tribe.invite5
//       };

//      TribeFactory.create(invites)
//         .then(() => (TribeFactory.template(template)))
//         .then(() => (TribeFactory.updateTribeInfo(invites, template)))
//         .then(() => {$location.path('/roles')})
//         .catch((error) => alert('error'));
//     }
//   })
// // build up an email  object and call it

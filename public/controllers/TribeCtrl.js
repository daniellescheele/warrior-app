angular.module('app')
  .controller('TribeCtrl', function (TribeFactory, $location, $timeout) {
   const tribe = this
   let template = null;
   let defaultDoll = {}
   let doll;


    tribe.template = function () {
      console.log("template picked",tribe.imgtemplate)
      template = tribe.imgtemplate;
      console.log("template is", template)


    }

    tribe.create = function () {
      console.log("submit clicked")
      var invites = {
        email2: tribe.invite1,
        email3: tribe.invite2,
        email4: tribe.invite3

      }


     TribeFactory.create(invites)
        .then(() => (TribeFactory.template(template)))
        .then(() => (TribeFactory.updateTribeInfo(invites, template)))
        .then(() => (TribeFactory.defaultDoll(template)))
        .then(() => {$location.path('/my_roles')})
        // .then($timeout(function() {doll = TribeFactory.getDoll();}, 1000))
        .catch((error) => alert('error'))
        // .then($timeout(() => (console.log("doll value", doll))), 1200);
    }

    // return {
    //   getDomDoll(){
    //     return doll;
    //   }
    // }

  })

// build up an email  object and call it
      // tribe.getDefaultDoll = function(template){
      //   console.log(template)
      //   // var storage = firebase.storage()
      //   // var storageRef = storage.ref();
      // // storageRef.child('paperdoll/PD1.png').getDownloadURL()
      //   // .then(function(url) {
      //   // defaultDoll.headdress = templateURL
      //   // defaultDoll.cloak = CL1.png
      //   // defaultDoll.boot = BT1.png
      //   // console.log(url)
      //   // $scope.$apply()
      //   // }

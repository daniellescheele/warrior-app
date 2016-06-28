
angular.module('app')
  .controller('WarriorCtrl', function (TribeFactory,$timeout,$scope) {

 const warrior = this

 // $timeout()
 // 	.then(() => firebase.database().ref().once('value'))
 // 	.then(snap => snap.val())
 // 	.then(data => warrior.photos = data)




		var storage = firebase.storage()
		var storageRef = storage.ref();

		$(document).ready(function(){
			var text = "<div class='headdresses'><img src='/roles/headdress4.png'><img src='/roles/headdress2.png'><img src='/roles/headdress3.png'></div>"
				$('[data-toggle="popover"]').popover({
					html : true,
					content: function() {
					return text
				}
				});
		});


		// var paperdollFolder = storage.child('paperdoll')
		// 	console.log(paperdollFolder);

		// var paperdoll1 = 'template1.png';

		storageRef.child('paperdoll/PD1.png').getDownloadURL()
			.then(function(url) {
			warrior.image = url
			console.log(url)
			$scope.$apply()

			})

		// var root = paperdoll1ref.bucket
		// var path = paperdoll1ref.fullPath
		// warrior.image = root + '/' + path
		// console.log(path);





 warrior.openHeaddress = function () {
 	console.log("headdress clicked")
 	console.log(imagesRef)
 }

 warrior.openArrows = function () {
 	console.log("openArrows")
 }

 warrior.openFlowers = function () {
 	console.log("openflowers")
 }

})







//    const role = this
//    let roleChosen = null;
//    let userId = firebase.auth().currentUser.uid;


//     role.choose = function () {
//       var tribeId;
//       console.log("role chosen", role.img)
//       roleChosen = role.img;
//       console.log(userId, roleChosen);



//     RoleFactory.choose(roleChosen)

//       .then(() => (tribeId = AuthFactory.getCurrentTribe()))
//       .then(() => (RoleFactory.addRole(userId,roleChosen,tribeId)))
//       .then(() => {$location.path('/my_roles')})
//       .catch((error) => alert('error'));
//   }

// })

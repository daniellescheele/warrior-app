
angular.module('app')
  .controller('WarriorCtrl', function (TribeFactory,$timeout,$scope) {

 const warrior = this
 var storage = firebase.storage()
 var storageRef = storage.ref();

const myUserEmail = firebase.auth().currentUser.email;
const topUserPostsRef = firebase.database().ref('tribes').orderByChild('email1').equalTo(myUserEmail).on('value', function(snapshot){
const data = (snapshot.val())
	console.log(data)
	for(key in data) {
		console.log(data[key].paperdoll)
	}
});



		$(document).ready(function(){
			var text = "<div class='headdresses'><img id='hdpink' src='/roles/headdress4.png'><img id='hdflow'src='/roles/headdress2.png'><img id='hdfeathers'src='/roles/headdress3.png'><img id='hdpurple'src='/roles/headdress1.png'></div>"
			var text2 = "<div class='cloaks'><img id='cloak1' src='/roles/cloak1.png'><img id='cloak2' src='/roles/cloak2.png'><img id='cloak3' src='/roles/cloak3.png'></div>"
			var text3 = "<div class='boots'><img id='boot1' src='/roles/boots1.png'><img id='boot2' src='/roles/boots2sm.png'><img id='boot3' src='/roles/boots3sm.png'></div>"
				$('[data-toggle="popover"]').popover({
					html : true,
					content: function() {
					return text
				}
				})
				$('[data-toggle="popover2"]').popover({
					html : true,
					content: function() {
					return text2
				}
				})
				$('[data-toggle="popover3"]').popover({
					html : true,
					content: function() {
					return text3
				}
				})
				$('body').on("click", "#hdpink", function(e){
					console.log("clicked", e)
				})
				$('body').on("click", "#hdflow", function(e){
					console.log("clicked", e)
				})
				$('body').on("click", "#hdfeathers", function(e){
					console.log("clicked", e)
				})
				$('body').on("click", "#hdpurple", function(e){
					console.log("clicked", e)
				})
				$('body').on("click", "#cloak1", function(e){
					console.log("clicked", e)
				})
				$('body').on("click", "#cloak2", function(e){
					console.log("clicked", e)
				})
				$('body').on("click", "#cloak3", function(e){
					console.log("clicked", e)
				})
				$('body').on("click", "#boot1", function(e){
					console.log("clicked", e)
				})
				$('body').on("click", "#boot2", function(e){
					console.log("clicked", e)
				})
				$('body').on("click", "#boot3", function(e){
					console.log("clicked", e)
				})
		})





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

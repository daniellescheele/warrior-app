
angular.module('app')
  .controller('WarriorCtrl', function (TribeFactory, $timeout,$http, $scope) {

 const warrior = this
 var storage = firebase.storage()
 var storageRef = storage.ref();
 var doll;
 warrior.paperdoll;
 warrior.headdress;
 warrior.cloak;
 warrior.boots;

const myUserEmail = firebase.auth().currentUser.email;
const topUserPostsRef = firebase.database().ref('tribes').orderByChild('email1').equalTo(myUserEmail).on('value', function(snapshot){
const data = (snapshot.val())
	console.log(data)
	for(key in data) {
		warrior.paperdoll = data[key].paperdoll
		warrior.headdress = data[key].headdressDefault
		warrior.cloak = data[key].cloakDefault
		warrior.boots = data[key].bootsDefault

		console.log(warrior.paperdoll)
		console.log(warrior.headdress)
		console.log(warrior.cloak)
		console.log(warrior.boots)
	}
});
	function updateDollHeaddress(myHeaddress) {
		warrior.headdress = myHeaddress;
	}
	// when i click the change it knows to change the headdress but doesnt display it


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
					var newHeaddress = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/headdress%2F${warrior.paperdoll}HD2.png?alt=media&token=740ebeaf-aa9a-4aee-828e-7510bee7dda8`
					console.log("clicked", newHeaddress)
					updateDollHeaddress(newHeaddress)
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

		$timeout(function() {doll = TribeFactory.getDoll();
			console.log("dollgetter",doll)



			;}, 1000)


 warrior.openHeaddress = function () {
 	console.log("headdress clicked")

 }

 warrior.openArrows = function () {
 	console.log("openArrows")
 }

 warrior.openFlowers = function () {
 	console.log("openflowers")
 }

})




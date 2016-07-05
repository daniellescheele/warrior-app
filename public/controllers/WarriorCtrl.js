
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
 warrior.quote;

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
	function updateDollCloak(mycloak){
		warrior.cloak = mycloak;
	}
	function updateDollBoots(myboots){
		warrior.boots = myboots;
	}

	$(document).ready(function(){
			var text = "<div class='headdresses'><img id='hdpink' src='/roles/headdress4.png'><img id='hdflow'src='/roles/headdress2.png'><img id='hdfeathers'src='/roles/headdress3.png'><img id='hdblue'src='/roles/hd4.png'></div>"
			var text2 = "<div class='cloaks'><img id='cloak1' src='/roles/cloakblue.png'><img id='cloak2' src='/roles/cloak2.png'><img id='cloak3' src='/roles/cloak3.png'><img id='cloak4' src='/roles/cloak4.png'></div>"
			var text3 = "<div class='boots'><img id='boot1' src='/roles/boots1.png'><img id='boot2' src='/roles/boots2sm.png'><img id='boot3' src='/roles/boots3sm.png'></div>"

				$('[data-toggle="popover"]').popover({
					html : true,
					animation: true,

					content: function() {
					return text
				}
				})
				$('[data-toggle="popover2"]').popover({
					html : true,
					animation: true,
					content: function() {
					return text2
				}
				})
				$('[data-toggle="popover3"]').popover({
					html : true,
					animation:true,
					content: function() {
					return text3
				}
				})
				$('body').on("click", "#hdpink", function(e){
					var newHeaddress = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/headdress%2F${warrior.paperdoll}HD2.png?alt=media&token=740ebeaf-aa9a-4aee-828e-7510bee7dda8`
					console.log("clicked", newHeaddress)
					updateDollHeaddress(newHeaddress)
				})
				$('body').on("click", "#hdblue", function(e){
					var newHeaddress = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/headdress%2F${warrior.paperdoll}HD5.png?alt=media&token=740ebeaf-aa9a-4aee-828e-7510bee7dda8`
					console.log("clicked", newHeaddress)
					updateDollHeaddress(newHeaddress)
				})
				$('body').on("click", "#hdflow", function(e){
					var newHeaddress = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/headdress%2F${warrior.paperdoll}HD3.png?alt=media&token=740ebeaf-aa9a-4aee-828e-7510bee7dda8`
					console.log("clicked", e)
					updateDollHeaddress(newHeaddress)
				})
				$('body').on("click", "#hdfeathers", function(e){
					var newHeaddress = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/headdress%2F${warrior.paperdoll}HD4.png?alt=media&token=740ebeaf-aa9a-4aee-828e-7510bee7dda8`
					console.log("clicked", e)
					updateDollHeaddress(newHeaddress)
				})
				$('body').on("click", "#hdpurple", function(e){
					var newHeaddress = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/headdress%2F${warrior.paperdoll}HD1.png?alt=media&token=47c160e5-987e-4bfb-ab07-d73ebfa8164b`
					console.log("clicked", e)
					updateDollHeaddress(newHeaddress)
				})
				$('body').on("click", "#cloak1", function(e){
					var newcloak = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/cloak%2FCL2.png?alt=media&token=f714e989-6b16-4c80-976e-5f02a8584a6f`
					console.log("clicked", e)
					updateDollCloak(newcloak)
				})
				$('body').on("click", "#cloak2", function(e){
					var newcloak = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/cloak%2FCL1.png?alt=media&token=f714e989-6b16-4c80-976e-5f02a8584a6f`
					console.log("clicked", e)
					updateDollCloak(newcloak)
				})
				$('body').on("click", "#cloak3", function(e){
					var newcloak = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/cloak%2FCL3.png?alt=media&token=f714e989-6b16-4c80-976e-5f02a8584a6f`
					console.log("clicked", e)
					updateDollCloak(newcloak)
				})
					$('body').on("click", "#cloak4", function(e){
					var newcloak = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/cloak%2FCL4.png?alt=media&token=f714e989-6b16-4c80-976e-5f02a8584a6f`
					console.log("clicked", e)
					updateDollCloak(newcloak)
				})
				$('body').on("click", "#boot1", function(e){
					var newboots = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/boots%2FBT1.png?alt=media&token=f714e989-6b16-4c80-976e-5f02a8584a6f`
					console.log("clicked", e)
					updateDollBoots(newboots)
				})
				$('body').on("click", "#boot2", function(e){
					var newboots = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/boots%2FBT2.png?alt=media&token=f714e989-6b16-4c80-976e-5f02a8584a6f`
					console.log("clicked", e)
					updateDollBoots(newboots)
				})
				$('body').on("click", "#boot3", function(e){
					var newboots = `https://firebasestorage.googleapis.com/v0/b/warrior-app.appspot.com/o/boots%2FBT3.png?alt=media&token=f714e989-6b16-4c80-976e-5f02a8584a6f`
					console.log("clicked", e)
					updateDollBoots(newboots)
				})


		})

		$timeout(function() {doll = TribeFactory.getDoll();
			console.log("dollgetter",doll)
		;}, 1000)



	warrior.getQuote = function () {
     $http.get("https://api.forismatic.com/api/1.0/?method=getQuote&format=html&lang=en")
       .then (response => {
       		 	response.addHeader(HttpHeaders.Names.ACCESS_CONTROL_REQUEST_HEADERS, "X-Key");
						response.addHeader(HttpHeaders.Names.ACCESS_CONTROL_REQUEST_HEADERS, "X-Signature");
						response.addHeader(HttpHeaders.Names.ACCESS_CONTROL_REQUEST_HEADERS, "Content-Type");
            warrior.quote = response
            console.log("please show a quote", warrior.quote);
            return warrior.quote;
          });
    }




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









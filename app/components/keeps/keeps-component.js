(function () {
	angular.module('keepr')
		.component('keepsComponent', {
			bindings: {
				member: '<',
				keeps: '<'
			},
			templateUrl: 'app/components/keeps/keeps.html',
			controller: KeepsController
		})

	function KeepsController(FBREF, $firebaseArray, $firebaseObject) {
		var kc = this;
		// mc.vaults = new Firebase(FBREF +`/users/<YOURUSERID>/vaults`)
		var db = new Firebase(FBREF + '/keeps')
		kc.keeps = $firebaseArray(db)
		// kc.keeps = keeps 
		function showMemberVaults(keep) {
			kc.showMemberVaults = true;
			kc.currentKeep = keep;
		}

		kc.saveKeep = function (keep) {
			console.log(keep)
			showMemberVaults(keep)
			console.log(kc.member)
		}
		kc.selectVault = function (id, vault) {
			console.log(id, vault)
			vault.keeps = vault.keeps || {}
			debugger
			kc.member.vaults[id].keeps[kc.currentKeep.$id] = kc.currentKeep.$id;
			// This should be moved to the auth service//this broke Jakes member object//need to find a way to save
			// var member = $firebaseObject(new Firebase(FBREF+ 'users/'+ kc.member.id))
			// member.$save(kc.member)
			member.vaults
			kc.member.$save();
			kc.currentKeep.keepCount++;
			kc.keeps.$save(kc.currentKeep)
		}









		console.log(kc.member, 'if you have a member filter the keeps to show only your own')
		//Tie Keeps to firebase
		// kc.keeps = [{
		// 	title: 'Learn to Draw',
		// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
		// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
		// 	keepCount: 100,
		// 	shareCount: 300,
		// 	viewCount: 900,
		// 	author: 'JimyJonJones'
		// }, {
		// 	title: 'Build Beautiful sites',
		// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
		// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
		// 	keepCount: 100,
		// 	shareCount: 300,
		// 	viewCount: 900,
		// 	author: 'JimyJonJones'
		// },{
		// 	title: 'Learn to Draw',
		// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
		// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
		// 	keepCount: 100,
		// 	shareCount: 300,
		// 	viewCount: 900,
		// 	author: 'JimyJonJones'
		// }, {
		// 	title: 'Build Beautiful sites',
		// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
		// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
		// 	keepCount: 100,
		// 	shareCount: 300,
		// 	viewCount: 900,
		// 	author: 'JimyJonJones'
		// },{
		// 	title: 'Learn to Draw',
		// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
		// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
		// 	keepCount: 100,
		// 	shareCount: 300,
		// 	viewCount: 900,
		// 	author: 'JimyJonJones'
		// }, {
		// 	title: 'Build Beautiful sites',
		// 	imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
		// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
		// 	keepCount: 100,
		// 	shareCount: 300,
		// 	viewCount: 900,
		// 	author: 'JimyJonJones'
		// }] 
	}

} ())
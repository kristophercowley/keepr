(function () {

	angular.module('keepr')
		.component('membersComponent', {
			templateUrl: 'app/components/members/members.html',
			controller: MembersController
		})


	function MembersController(MemberService, $state, FBREF, $firebaseArray) {
		this.$onInit = function () {
			if (!MemberService.getAuth()) {
				return $state.go('home')
			}
			mc.member = MemberService.getMember();
		}
		var mc = this;
		var db = new Firebase(FBREF + '/keeps');


		mc.keeps = new $firebaseArray(db)


		mc.addKeep = function (keep) {
			console.log(keep);
			keep.author = mc.member;
			keep.keepCount = 0;
			keep.shareCount = 0;
			keep.viewCount = 0;
			mc.keeps.$add('addKeep:', keep);
			console.log('keeps:', mc.keeps);
			mc.newKeep = {};


		}
		mc.removeKeep = function (i) {
			mc.keeps.$remove(i)
		}

		mc.addVault = function (vault) {
			console.log('vault:',vault)
			var vaults = $firebaseArray(new Firebase(FBREF + 'users/' + mc.member.id + '/vaults'))

			vaults.$add(vault)
			console.log('vaults',vaults)
		}

	}


} ())
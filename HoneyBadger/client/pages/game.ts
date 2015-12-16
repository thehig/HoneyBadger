/// <reference path="../../typings/meteor/meteor.d.ts" />
/// <reference path="../../typings/meteor/ironrouter.d.ts" />
/// <reference path="../../typings/phaser/phaser.d.ts" />
/// <reference path="../game/launcher.ts" />

eval('var HoneyBadger = (this.HoneyBadger || (this.HoneyBadger = {}))'); // https://doctorllama.wordpress.com/2015/04/21/meteor-typescript-classes-and-modules/

if (Meteor.isClient) {
	Template['game'].rendered = function() {
		if (!Meteor.userId()) {
			Router.go('home');
		}
		else {
			this.game = new HoneyBadger.Launcher();	
		}		
	}
}

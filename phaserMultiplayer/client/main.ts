/// <reference path="../typings/meteor/meteor.d.ts" />
/// <reference path="../typings/phaser/phaser.d.ts" />
/// <reference path="states/MenuState.ts" />

eval('var HoneyBadger = (this.HoneyBadger || (this.HoneyBadger = {}))'); // https://doctorllama.wordpress.com/2015/04/21/meteor-typescript-classes-and-modules/

module HoneyBadger {
	export class Launcher {
		game: Phaser.Game;

		constructor(){
			this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
				create: this.create,
				preload: this.preload
			})
		}

		preload() { 
			this.game.load.image("title", "/resources/graphics/TitleScreen.png");
		}

		create() {
			this.game.state.add("MenuState", HoneyBadger.MenuState, true);
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		}

	}
}

if (Meteor.isClient) {
	Template['game'].rendered = function() {
		console.log("Game template onLoad");
		this.game = new HoneyBadger.Launcher();
	}
}

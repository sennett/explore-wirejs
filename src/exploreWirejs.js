// requirejs base config
require.config({
	baseUrl: "src",
	packages: [
		{ name: 'wire', location: '../bower_components/wire', main: 'wire' },
		{ name: 'when', location: '../bower_components/when', main: 'when' },
		{ name: 'meld', location: '../bower_components/meld', main: 'meld' }
	],
	paths:{
		box2dweb: '../vendor/Box2dWeb-2.1.a.3'
	},
	shim: {
		box2dweb: {
			exports: 'Box2D'
		}
	}
});

define(['wire!wireSpec'], function () {
	return {};
});
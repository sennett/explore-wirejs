require.config({
	baseUrl: ".",
	packages: [
		{ name: 'wire', location: '/bower_components/wire', main: 'wire' },
		{ name: 'when', location: '/bower_components/when', main: 'when' },
		{ name: 'meld', location: '/bower_components/meld', main: 'meld' },
		{ name: 'poly', location: '/bower_components/poly', main: 'poly' }
	],
	paths:{
		box2dweb: '/vendor/Box2dWeb-2.1.a.3'
	},
	shim: {
		box2dweb: {
			exports: 'Box2D'
		}
	}
});

require(['wire!src/wireSpec']);
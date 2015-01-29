({
	"name": "buildInit",
	"baseUrl": "./",
	"out": "../build/exploreWirejs.js",

	mainConfigFile: 'exploreWirejs.js',

	paths: {
		'wire/builder/rjs': '../node_modules/wire-rjs-builder/builder'
	},

	optimize: "uglify",
	removeCombined: true

})
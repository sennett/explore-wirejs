({
	"name": "buildInit",
	"baseUrl": "./",
	"out": "../build/exploreWirejs.js",

	mainConfigFile: 'amdBaseConfig.js',

	paths: {
		'wire/builder/rjs': '../node_modules/wire-rjs-builder/builder'
	},

	optimize: "none",
	removeCombined: true

})
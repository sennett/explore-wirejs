({
	"baseUrl": "./",
	"dir": "../build",

	mainConfigFile: 'amdBaseConfig.js',

	paths: {
		'wire/builder/rjs': '../node_modules/wire-rjs-builder/builder'
	},

	optimize: "none",

	findNestedDependencies: false,

	"modules": [
		{
			"name": "exploreWirejs",
			"include": []
		}
	]
})
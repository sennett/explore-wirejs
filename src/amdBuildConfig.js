({
	"baseUrl": "./",
	"dir": "../build",

	mainConfigFile: 'amdBaseConfig.js',

	paths: {
		'wire/builder/rjs': '../node_modules/wire-rjs-builder/builder'
	},

	optimize: "none",
	removeCombined: true,
	findNestedDependencies: true,

	"modules": [
		{
			"name": "buildInit",
			"deps": ["wire"],
			findNestedDependencies: true
		}
	]
})
({
	"baseUrl": "./",
	"dir": "../build",

	mainConfigFile: 'amdBaseConfig.js',

	paths: {
		'wire/builder/rjs': '../node_modules/wire-rjs-builder/builder'
	},

	optimize: "none",
	removeCombined: true,

	"modules": [
		{
			"name": "buildInit",
			"deps": ["wire"]
		}
	]
})
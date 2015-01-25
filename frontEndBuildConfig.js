({
	mainConfigFile: 'src/main.js',
	name: "main",
	out: "build/main-built.js",
	paths: {
		'wire/builder/rjs': '../node_modules/wire-rjs-builder/builder',
		'src': '../src'
	},
	optimize: "uglify",
	findNestedDependencies: false
})
define({
	randomInjectable: "some message yo",
	staticData: {
		module: 'src/staticData'
	},
	app: {
		create: {
			module: "src/App",
			args: [{ $ref: "moduleA"}, { $ref: "moduleB"}, {$ref: "staticData"}]
		},
		ready: 'run'
	},
	moduleA: {
		create: {
			module: "src/ModuleA",
			args: {$ref: "randomInjectable" }
		}
	},
	moduleB: {
		create: {
			module: "src/ModuleB",
			args: [{$ref: "moduleC"}, {$ref: "randomInjectable" }]
		}
	},
	moduleC: {
		create: {
			module: "src/ModuleC"
		}
	}
});
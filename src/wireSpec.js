define({
	randomInjectable: "some message yo",
	staticData: {
		module: 'staticData'
	},
	app: {
		create: {
			module: "App",
			args: [{ $ref: "moduleA"}, { $ref: "moduleB"}, {$ref: "staticData"}]
		},
		ready: 'run'
	},
	moduleA: {
		create: {
			module: "ModuleA",
			args: {$ref: "randomInjectable" }
		}
	},
	moduleB: {
		create: {
			module: "ModuleB",
			args: [{$ref: "moduleC"}, {$ref: "randomInjectable" }]
		}
	},
	moduleC: {
		create: {
			module: "ModuleC"
		}
	}
});
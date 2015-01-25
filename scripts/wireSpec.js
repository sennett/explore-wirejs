define({
	randomInjectable: "some message yo",
	app: {
		create: {
			module: "scripts/App",
			args: [{ $ref: "moduleA"}, { $ref: "moduleB"} ]
		},
		ready: 'run'
	},
	moduleA: {
		create: {
			module: "scripts/ModuleA",
			args: {$ref: "randomInjectable" }
		}
	},
	moduleB: {
		create: {
			module: "scripts/ModuleB",
			args: [{$ref: "moduleC"}, {$ref: "randomInjectable" }]
		}
	},
	moduleC: {
		create: {
			module: "scripts/ModuleC"
		}
	}
});
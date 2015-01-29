define({
	randomInjectable: "some message yo",
	staticData: {
		module: 'staticData'
	},
	app: {
		create: {
			module: "App",
			args: [{ $ref: "moduleA"}, { $ref: "moduleB"}, {$ref: "staticData"},{$ref: "moduleD"},{$ref: "moduleE"},]
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
			module: "someSubDir/ModuleB",
			args: [{$ref: "moduleC"}, {$ref: "randomInjectable" }]
		}
	},
	moduleC: {
		create: {
			module: "ModuleC"
		}
	},
	moduleD: {
		module: "someSubDir/ModuleD"
	},
	moduleE: {
		module: "someSubDir/ModuleE"
	}
});
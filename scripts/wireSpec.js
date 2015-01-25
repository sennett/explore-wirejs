define({
	randomInjectable: "some message yo from module A",
	app: {
		create: {
			module: "scripts/App",
			args: [{ $ref: "moduleA"}]
		},
		ready: 'run'
	},
	moduleA: {
		create: {
			module: "scripts/ModuleA",
			args: {$ref: "randomInjectable" }
		}
	}
});
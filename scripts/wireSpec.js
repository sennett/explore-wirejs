define({
	randomInjectable: "some message yo",
	app: {
		create: {
			module: "scripts/App",
			args: {
				$ref: "randomInjectable"
			}
		},
		ready: 'run'
	}
});
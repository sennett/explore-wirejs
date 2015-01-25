define(function () {
	var ModuleB = function(moduleC, randomInjectable){
		this.moduleC = moduleC;
		this.randomInjectable = randomInjectable;
	};

	ModuleB.prototype = {
		pleaseDoSomethingModuleB: function(){
			this.moduleC.sayThisThingPlease(this.randomInjectable + " asked by module B");
		},
		setModuleAAtRuntime: function(moduleA){
			this.moduleA = moduleA;
			console.log('module A set at runtime');
		}
	};

	return ModuleB;
});
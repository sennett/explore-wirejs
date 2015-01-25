define(function () {
	var ModuleA = function(randomInjectable){
		this.randomInjectable = randomInjectable;
	};

	ModuleA.prototype = {
		doSomethingModuleA: function(){
			alert(this.randomInjectable);
		}
	};


	return ModuleA;
});
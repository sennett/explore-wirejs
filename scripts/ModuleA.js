define(function () {
	var ModuleA = function(randomInjectable){
		this.randomInjectable = randomInjectable;
	};

	ModuleA.prototype = {
		doSomethingModuleA: function(){
			console.log(this.randomInjectable + " from module a");
		}
	};


	return ModuleA;
});
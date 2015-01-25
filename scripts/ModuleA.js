define(function () {
	var ModuleA = function(randomInjectable){
		this.randomInjectable = randomInjectable;
	};

	ModuleA.prototype = {
		doSomethingModuleA: function(){
			console.log(this.randomInjectable + " from module a");
		},
		applyStaticData: function(data){
			console.log("data given to module A", data);
		}
	};


	return ModuleA;
});
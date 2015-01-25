define(function () {
	var App = function(moduleA, moduleB){
		this.moduleA = moduleA;
		this.moduleB = moduleB;
	};

	App.prototype = {
		run: function(){
			this.moduleA.doSomethingModuleA();
			this.moduleB.pleaseDoSomethingModuleB();
		}
	};

	return App;
});
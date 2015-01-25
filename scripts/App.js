define(function () {
	var App = function(moduleA, moduleB, staticData){
		this.moduleA = moduleA;
		this.moduleB = moduleB;
		this.staticData = staticData;
	};

	App.prototype = {
		run: function(){
			this.moduleA.doSomethingModuleA();
			this.moduleA.applyStaticData(this.staticData);
			this.moduleB.pleaseDoSomethingModuleB();
		}
	};

	return App;
});
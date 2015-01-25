define(['box2dweb'], function (box2dweb) {
	var App = function(moduleA, moduleB, staticData){
		this.moduleA = moduleA;
		this.moduleB = moduleB;
		this.staticData = staticData;
	};

	App.prototype = {
		run: function(){
			this.moduleA.doSomethingModuleA();
			this.moduleA.applyStaticData(this.staticData);
			this.moduleB.setModuleAAtRuntime(this.moduleA);
			this.moduleB.pleaseDoSomethingModuleB();
			console.log('non amd module: ', box2dweb);
		}
	};

	return App;
});
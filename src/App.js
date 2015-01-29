define(['box2dweb'], function (box2dweb) {
	var App = function(moduleA, moduleB, staticData, moduleD, moduleE){
		this.moduleA = moduleA;
		this.moduleB = moduleB;
		this.staticData = staticData;
		this.moduleD = moduleD;
		this.moduleE = moduleE;
	};

	App.prototype = {
		run: function(){
			this.moduleA.doSomethingModuleA();
			this.moduleA.applyStaticData(this.staticData);
			this.moduleB.setModuleAAtRuntime(this.moduleA);
			this.moduleB.pleaseDoSomethingModuleB();
			this.moduleD.print();
			this.moduleE.print();
			console.log('non amd module: ', box2dweb);
		}
	};

	return App;
});
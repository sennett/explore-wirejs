define(function () {
	var App = function(moduleA){
		this.moduleA = moduleA;
	};

	App.prototype = {
		run: function(){
			this.moduleA.doSomethingModuleA();
		}
	};

	return App;
});
define(function () {
	var App = function(randomInjectable){
		this.randomInjectable = randomInjectable;
	};

	App.prototype = {
		run: function(){
			alert(this.randomInjectable);
		}
	};

	return App;
});
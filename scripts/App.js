define(function () {
	var App = function(myRandomInjectable){
		this.myRandomInjectable = myRandomInjectable;
	};

	App.prototype = {
		run: function(){
			alert("sup");
		}
	};

	return App;
});
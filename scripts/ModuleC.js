define(function () {
	var ModuleC = function (){

	};

	ModuleC.prototype = {
		sayThisThingPlease: function(thing){
			console.log("\"" + thing + "\", said module C ");
		}
	};

	return ModuleC;
});
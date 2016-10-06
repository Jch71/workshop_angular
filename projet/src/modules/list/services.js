(function(){

    var moduleDependencies = [];
	
	angular.module('list.services', moduleDependencies )
		   .run(function(){
		   	console.log('list.services','RUN')
		   })
		   .config(function(){
		   	console.log('list.services','CONFIG')
		   })



})();
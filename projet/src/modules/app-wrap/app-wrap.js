(function() {

    var moduleDependencies = ['app-wrap.services', 'app-wrap.controllers', 'app-wrap.routes'];

    angular.module('app-wrap', moduleDependencies)
        .run(function() {
            console.log('app-wrap.module', 'RUN')
        })
        .config(function() {
            console.log('app-wrap.module', 'RUN')
        })



})();

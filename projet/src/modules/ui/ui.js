(function() {

    var moduleDependencies = ['ui.services', 'ui.controllers', 'ui.routes'];

    angular.module('ui', moduleDependencies)
        .run(function() {
            console.log('ui.module', 'RUN')
        })
        .config(function() {
            console.log('ui.module', 'RUN')
        })



})();

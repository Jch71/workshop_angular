(function() {

    var moduleDependencies = ['shared.services', 'shared.controllers', 'shared.routes'];

    angular.module('shared', moduleDependencies)
        .run(function() {
            console.log('shared.module', 'RUN')
        })
        .config(function() {
            console.log('shared.module', 'RUN')
        })



})();

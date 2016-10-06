(function() {

    var moduleDependencies = ['edit.services', 'edit.controllers', 'edit.routes'];

    angular.module('edit', moduleDependencies)
        .run(function() {
            console.log('edit.module', 'RUN')
        })
        .config(function() {
            console.log('edit.module', 'RUN')
        })



})();

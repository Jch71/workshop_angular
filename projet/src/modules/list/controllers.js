(function() {

    var moduleDependencies = [];

    angular.module('list.controllers', moduleDependencies)
        .run(function() {
            console.log('list.controllers', 'RUN')
        })
        .config(function() {
            console.log('list.controllers', 'CONFIG')
        })
        .controller('listCtrl', function($scope) {

        })


})();

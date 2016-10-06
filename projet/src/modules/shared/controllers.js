(function() {

    var moduleDependencies = [];

    angular.module('shared.controllers', moduleDependencies)
        .run(function() {
            console.log('shared.controllers', 'RUN')
        })
        .config(function() {
            console.log('shared.controllers', 'RUN')
        })

    .controller('sharedCtrl', function($scope) {

    })


})();

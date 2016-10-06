(function() {

    var moduleDependencies = [];

    angular.module('edit.controllers', moduleDependencies)
        .run(function() {
            console.log('edit.controllers', 'RUN')
        })
        .config(function() {
            console.log('edit.controllers', 'RUN')
        })

    .controller('editCtrl', function($scope) {

    })


})();

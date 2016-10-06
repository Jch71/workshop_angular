(function() {

    var moduleDependencies = [];

    angular.module('ui.controllers', moduleDependencies)
        .run(function() {
            console.log('ui.controllers', 'RUN')
        })
        .config(function() {
            console.log('ui.controllers', 'RUN')
        })

    .controller('uiCtrl', function($scope) {

    })


})();

(function() {

    var moduleDependencies = [];

    angular.module('app-wrap.controllers', moduleDependencies)
        .run(function() {
            console.log('app-wrap.controllers', 'RUN')
        })
        .config(function() {
            console.log('app-wrap.controllers', 'CONFIG')
        })

    .controller('app-wrapCtrl', function($scope) {

    })


})();

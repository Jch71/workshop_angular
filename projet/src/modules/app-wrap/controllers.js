(function() {

    var moduleDependencies = [];

    angular.module('app-wrap.controllers', moduleDependencies)
        .run(function() {
            console.log('app-wrap.controllers', 'RUN')
        })
        .config(function() {
            console.log('app-wrap.controllers', 'CONFIG')
        })
        .controller('AppCtrl', AppCtrl)

    function AppCtrl($scope) {

        this.title = " Amazing !!"

        $scope.$on('USER_SELECTED', function($event, data) {
            console.log($event, data);
        })

        this.userSelect = function(arg) {
            console.warn(arg);
        }


    }


})();

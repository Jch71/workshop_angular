(function() {

    var moduleDependencies = ['edit.services', 'edit.controllers', 'edit.routes'];

    angular.module('edit', moduleDependencies)
        .directive('editComponent', [editComponentDirective])

    function editComponentDirective() {
        return {
            templateUrl: function() {
                return 'modules/edit/edit.html'
            },
            scope: true,
            restrict: 'E',
            constrollerAs: '$ctrl',
            controller: function($scope, $element, $attrs, $transclude, Users) {


            }
        };
    }

})();

(function() {

    var moduleDependencies = [];

    angular.module('edit', moduleDependencies)
        .directive('editComponent', [editComponentDirective])

    function editComponentDirective() {
        return {
            templateUrl: function() {
                return 'modules/edit/edit.html'
            },
            restrict: 'E',
            scope: {},
            bindToController: true,
            controllerAs: '$ctrl',
            controller: function($rootScope, $element, $attrs, $transclude, Users) {
                var vm = this;

                $rootScope.$on('USER_SELECTED', function($event, data) {
                    console.info($event, data, 'From Edit sans emebter le controller sup');
                    vm.user = data;
                })


            }
        };
    }

})();

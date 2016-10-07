(function() {

    var moduleDependencies = ['list.services', 'list.controllers', 'list.routes'];

    angular.module('list', moduleDependencies)
        .directive('listComponent', [listComponentDirective])

    function listComponentDirective() {
        return {
            templateUrl: function() {
                return 'modules/list/list.html' },
            restrict: 'E',
            scope: {
                mainTitle: '=display'
            },
            bindToController: true,
            controllerAs: '$ctrl',
            controller: function($scope, $element, $attrs, $transclude, Users) {
                this.title = 'List of Users';
                this.mainTitle += '*****';
                this.users = Users.getData().users;


            }
        };
    }

})();

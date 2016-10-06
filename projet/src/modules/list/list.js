(function() {

    var moduleDependencies = ['list.services', 'list.controllers', 'list.routes'];

    angular.module('list', moduleDependencies)
        .directive('listComponent', [listComponentDirective])

    function listComponentDirective() {
        return {
            templateUrl: function() {
                return 'modules/list/list.html'
            },
            restrict: 'E',
            scope: true,
            controller: function($scope, $element, $attrs, $transclude, Users) {
                console.log(Users);
                $scope.title = 'List of Users';
                $scope.users = Users.getData().users;
            }
        };
    }

})();

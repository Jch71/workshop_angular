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
            scope: {
                mainTitle: '=display',
                callback: '&'
            },
            bindToController: true,
            controllerAs: '$ctrl',
            controller: function($rootScope, $element, $attrs, $transclude, Users) {
                var vm = this;
                this.title = 'List of Users';

                //console.log(this.callback);

                this.users = [];

                Users.getData().then(function(data) {
                    console.info(data)
                    vm.users = data;
                });

                this.clickFn = function(item) {
                    $rootScope.$emit('USER_SELECTED', item);
                    //this.callback({user:item})
                }


            }
        };
    }

})();

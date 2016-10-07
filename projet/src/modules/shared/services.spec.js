describe('UserServices Test', function() {

    var $controller,
        $rootScope,
        $scope,
        vm,
        $filter,
        $compile;

    beforeEach(module('shared.services'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _$filter_, _$compile_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $scope = $rootScope.$new();
        //vm = $controller('LoginCtrl', {$scope: $scope});
        $filter = _$filter_;
    }));


    xit('Should fail', function() {
        expect(1).toBe(2);
    })


    describe('UserServices Test', function() {
        // body...
    })
})

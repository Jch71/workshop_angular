describe('UserServices Test', function() {

    var $controller,
        $rootScope,
        $scope,
        vm,
        service,
        $filter,
        $compile;

    beforeEach(module('shared.services'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _$filter_, _$compile_,Users) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $scope = $rootScope.$new();
        service = Users;  
        //vm = $controller('LoginCtrl', {$scope: $scope});
        $filter = _$filter_;
    }));


    xit('Should fail', function() {
        expect(1).toBe(2);
    })


    describe('UserServices Test', function() {

    	it('has a collection', function() {
    		expect(service.collection).toBeDefined();
    	});

    	it('has a getData method', function() {
    		expect(service.getData.constructor).toBe(Function);
    	});
        
        it('has a getData return a promise', function() {
    		expect(service.getData().then).toBeDefined();
    	});
    })
})

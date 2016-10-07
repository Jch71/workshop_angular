describe('open-weather component :', function() {


    var $controller,
        $rootScope,
        $scope,
        vm,
        $filter,
        $compile;

    beforeEach(module('open-weather'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _$filter_, _$compile_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $scope = $rootScope.$new();
        //vm = $controller('LoginCtrl', {$scope: $scope});
        $filter = _$filter_;
    }));

    describe('filters : humanDate', function() {

        it('Should have a "owHumanDate" filter', function() {
            expect($filter('owHumanDate')).toBeDefined();
        });
        it('Should convert date to format "EEE d, MMM yyyy"', function() {
            expect($filter('owHumanDate')('1433242800')).toBe('Tue 2, Jun 2015');
        });

    });

    describe('directives : ', function() {

        it('Should have a "openWeather" directive', function() {
            var directive;
            inject(function($injector) {
                directive = $injector.has('openWeatherDirective');
            })
            expect(directive).toBe(true);
        });

        it('Replaces the element with the appropriate content', function() {
            var element = $compile("<open-weather></open-weather>")($scope);
            $scope.$digest();
            expect(element.html()).toContain("powered by openWeatherMap.org");
        });

        it('Should have an isolateScope "owc"', function() {
            $rootScope.mode = 'list'
            var element = $compile("<open-weather display='mode'></open-weather>")($scope);
            expect(element.isolateScope().owc.constructor.name).toBe('OpenWeatherController')

        });

        it('Should have a "display" option attribute', function() {
            $rootScope.mode = 'list'
            var element = $compile("<open-weather display='mode'></open-weather>")($scope);
            expect(element.isolateScope().owc.display).toBe('list')
        });

        it('Should respond to changes', function() {
            //Explication du bind to controller
            //https://code.angularjs.org/1.3.15/docs/api/ng/function/angular.element
            //console.log(element.scope())
            //console.log(element.isolateScope())
            //console.log(element.controller())
            $rootScope.mode = 'list'
            var element = $compile("<open-weather display='mode'></open-weather>")($scope);
            //$rootScope.$digest();
            expect(element.isolateScope().owc.display).toBe('list')
            $rootScope.mode = 'card'
            $rootScope.$apply();
            expect(element.isolateScope().owc.display).toBe('card')
        });
    });

    describe('services : ', function() {

        var service,
            $httpBackend;

        beforeEach(inject(function(OpenWeather, _$httpBackend_) {
            service = OpenWeather;
            $httpBackend = _$httpBackend_;
            //Définition
            $httpBackend.when('GET', 'http://api.openweathermap.org/data/2.5/forecast/daily')
                .respond({
                    "name": "London"
                });
        }));

        it('Should have a "OpenWeather" service', function() {
            expect(service).toBeDefined();
        });

        it('"OpenWeather" Should have a get function', function() {
            expect(service.get).toBeDefined();
        });

        it('"OpenWeather.get "should invoke service with right parameters', function() {
            //https://docs.angularjs.org/api/ngMock/service/$httpBackend
            // Attente
            $httpBackend.expect('GET', 'http://api.openweathermap.org/data/2.5/forecast/daily', {
                "q": "London,uk",
                "mode": "JSON",
                "units": "metric",
                "cnt": 2
            }).respond({});
            service.get('London,uk', 2);
            $httpBackend.flush();
        });

        describe('Service in controllers : ', function() {

            it('Should send result in controller scope', function() {
                $rootScope.mode = 'list'
                var element = $compile("<open-weather display='mode'></open-weather>")($scope);
                element.controller('openWeather').getForecast('London,uk', 2);
                $httpBackend.flush();
                expect(element.controller('openWeather').forecast.name).toBe('London')
            });
        });
    });

    describe('controllers : ', function() {

        it('Should have a "OpenWeatherController" controller', function() {
            var OpenWeatherController = $controller('OpenWeatherController',{'$scope':'', '$element':'', '$attrs':'','OpenWeather':''});
            //expect(OpenWeatherController).toBeDefined();
        });

    });



});

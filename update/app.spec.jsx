// Ajouter globalment des matchers 
beforeEach(function() {
    var matchers = {
        toBeOfType: function(typeString) {
            return typeof this.actual == typeString;
        }
    };

    jasmine.addMatchers(matchers);
});


var customMatchers = {
    /* Exemple de Matcher personnalisé */
    toBeDivisibleByTwo: function() {
        return {
            compare: function(actual, expected) {
                return {
                    pass: (actual % 2) === 0
                };
            }
        };
    },
    /* Exemple de Matcher pour normaliser le nom des modules */
    toBeRegularName: function() {
        return {
            compare: function(actual, expected) {
                if (expected === undefined) {
                    expected = '';
                }
                var result = {};

                result.pass = !actual.match(/[A-Z]/) && !actual.match(/[0-9]/)

                if (result.pass) {
                    result.message = actual + ' correct';
                } else {
                    result.message = 'Respect Naming Rule';
                }
                return result;
            }
        };
    }
};

beforeEach(function() {
    jasmine.addMatchers(customMatchers);
});



/* Test simples */
describe('Test Integration :', function() {

    it('should pass', function() {
        expect(1).toEqual(1);
    });

    xit('should fail', function() {
        expect(1).toEqual(2);
    });

});

/* Tester la structure existante */

function getStructure(array) {

    array.forEach(function(moduleName, array, index) {
        if (getStructure.cache[moduleName]) return;

        getStructure.cache[moduleName] = true;

        describe(moduleName + ' ->', function() {

            it('Application contains module : ' + moduleName, function() {
                expect(angular.module(moduleName)).toBeDefined();
            });
            it('Naming rule is repected : ' + moduleName, function() {
                expect(moduleName).toBeRegularName();
            });
            it('Reguires : ' + angular.module(moduleName).requires, function() {});

            if (angular.module(moduleName).requires.length) {
                getStructure(angular.module(moduleName).requires);
            };
        });
    });
};
getStructure.cache = {};
/* ['app'] est le module applicatif */
getStructure(['app']);


/* Implémentation du test de structure existante */
describe('Applications Modules Order', function() {
    var count = 1;
    for (var mod in getStructure.cache) {
        it(' ' + (count++) + ' -> ' + mod, function() {});
    }
});

/* Tester la structure attendue */
describe('Application Structure :', function() {

    var app;
    var $rootScope, $scope, $controller;

    //beforeEach(module('app'))
    /*
        beforeEach(inject(function(_$rootScope_, _$controller_){
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
            $controller = _$controller_;

            //registerController = $controller('RegisterController', {'$rootScope' : $rootScope, '$scope': $scope});
        }));

        */



    var modules = [
        ['app', ['app.core', 
                    'app.controllers', 
                    'app.routes', 
                    'app.settings',
                    'app.history',
                    'app.login',
                    'app.weather'
                    ]],
        ['app.core', ['core.config', 'core.directives', 'core.services', 'core.debug']],
        ['core.config', []],
        ['core.directives', []],
        ['core.services', []],
        ['core.debug', []],
        ['app.controllers', []],
        ['app.routes', []],
        ['app.settings', ['settings.services', 'settings.controllers', 'settings.routes']],
        ['app.history', ['history.services', 'history.controllers', 'history.routes']],
        ['app.login', ['login.services', 'login.controllers', 'login.routes']],
        ['app.weather', ['weather.services', 'weather.controllers', 'weather.routes']],
    ];


    modules.forEach(function(e, a, i) {
        var moduleName = e[0],
            moduleDependencies = e[1],
            mod = angular.module(moduleName)

        describe('Module loading :', function() {
            it('Application contains module : ' + moduleName, function() {
                //debugger; // Option de debug du test lui même
                expect(mod).toBeDefined();
            });
        });
        describe('Module Names :', function() {
            it('Naming rule is repected : ' + moduleName, function() {
                expect(mod.name).toBeRegularName();
            });
        });

        describe('Module Dependencies :', function() {
            it(moduleDependencies.length + ' dependencies are expected, got : (' + moduleName + ') ' + mod.requires.length,
                function() {
                    expect(mod.requires.length).toEqual(moduleDependencies.length);
                });
            moduleDependencies.forEach(function(e, a, i) {
                it(' -> Dependency is loaded : ' + e, function() {
                    expect(angular.module(e)).toBeDefined();
                });

            });
        });
    });

});

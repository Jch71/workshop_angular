(function() {

    var moduleDependencies = [
        'edit',
        'list',
        'ui',
        'shared',
        'app-wrap.services',
        'app-wrap.controllers',
        'app-wrap.routes'
    ];

    angular.module('app-wrap', moduleDependencies)
        .run(function($rootScope) {
            console.log('app-wrap', 'RUN')
            $rootScope.$watch(function() {
                console.log('digest', Math.random());
            })
        })
        .config(function() {
            console.log('app-wrap', 'CONFIG')
        })


})();

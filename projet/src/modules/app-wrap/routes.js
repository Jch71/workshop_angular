(function() {

    var moduleDependencies = [];
    angular.module('app-wrap.routes', moduleDependencies)
        .run(function() {
            console.log('app-wrap.routes', 'RUN')
        })
        .config(function() {
            console.log('app-wrap.routes', 'CONFIG')
        })

    .config([configFn]);

    function configFn() {


    }


})();

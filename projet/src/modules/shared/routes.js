(function() {

    var moduleDependencies = [];
    angular.module('shared.routes', moduleDependencies)
        .run(function() {
            console.log('shared.routes', 'RUN')
        })
        .config(function() {
            console.log('shared.routes', 'RUN')
        })

    .config([configFn]);

    function configFn() {


    }


})();

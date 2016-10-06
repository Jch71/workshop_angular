(function() {

    var moduleDependencies = [];
    angular.module('ui.routes', moduleDependencies)
        .run(function() {
            console.log('ui.routes', 'RUN')
        })
        .config(function() {
            console.log('ui.routes', 'RUN')
        })

    .config([configFn]);

    function configFn() {


    }


})();

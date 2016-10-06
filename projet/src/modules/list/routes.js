(function() {

    var moduleDependencies = [];
    angular.module('list.routes', moduleDependencies)
        .run(function() {
            console.log('list.routes', 'RUN')
        })
        .config(function() {
            console.log('list.routes', 'CONFIG')
        })

    .config([configFn]);

    function configFn() {


    }


})();

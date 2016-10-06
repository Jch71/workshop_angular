(function() {

    var moduleDependencies = [];
    angular.module('edit.routes', moduleDependencies)
        .run(function() {
            console.log('edit.routes', 'RUN')
        })
        .config(function() {
            console.log('edit.routes', 'RUN')
        })

    .config([configFn]);

    function configFn() {


    }


})();

(function() {

    var moduleDependencies = [];
    angular.module('<%= module_name %>.routes', moduleDependencies)
        .run(function() {
            console.log('<%= module_name %>.routes', 'RUN')
        })
        .config(function() {
            console.log('<%= module_name %>.routes', 'RUN')
        })

    .config([configFn]);

    function configFn() {


    }


})();

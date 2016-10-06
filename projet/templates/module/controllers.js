(function() {

    var moduleDependencies = [];

    angular.module('<%= module_name %>.controllers', moduleDependencies)
        .run(function() {
            console.log('<%= module_name %>.controllers', 'RUN')
        })
        .config(function() {
            console.log('<%= module_name %>.controllers', 'RUN')
        })

    .controller('<%= module_name %>Ctrl', function($scope) {

    })


})();

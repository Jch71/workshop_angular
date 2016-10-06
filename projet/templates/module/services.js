(function() {

    var moduleDependencies = [];

    angular.module('<%= module_name %>.services', moduleDependencies)
        .run(function() {
            console.log('<%= module_name %>.services', 'RUN')
        })
        .config(function() {
            console.log('<%= module_name %>.services', 'RUN')
        })

})();

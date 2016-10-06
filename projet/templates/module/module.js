(function() {

    var moduleDependencies = ['<%= module_name %>.services', '<%= module_name %>.controllers', '<%= module_name %>.routes'];

    angular.module('<%= module_name %>', moduleDependencies)
        .run(function() {
            console.log('<%= module_name %>.module', 'RUN')
        })
        .config(function() {
            console.log('<%= module_name %>.module', 'RUN')
        })



})();

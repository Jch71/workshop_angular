(function() {

    var moduleDependencies = [];

    angular.module('edit.services', moduleDependencies)
        .run(function() {
            console.log('edit.services', 'RUN')
        })
        .config(function() {
            console.log('edit.services', 'RUN')
        })

})();

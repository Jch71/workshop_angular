(function() {

    var moduleDependencies = [];

    angular.module('shared.services', moduleDependencies)
        .run(function() {
            console.log('shared.services', 'RUN')
        })
        .config(function() {
            console.log('shared.services', 'RUN')
        })

})();

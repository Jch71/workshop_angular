(function() {

    var moduleDependencies = [];

    angular.module('ui.services', moduleDependencies)
        .run(function() {
            console.log('ui.services', 'RUN')
        })
        .config(function() {
            console.log('ui.services', 'RUN')
        })

})();

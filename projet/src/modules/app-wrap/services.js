(function() {

    var moduleDependencies = [];

    angular.module('app-wrap.services', moduleDependencies)
        .run(function() {
            console.log('app-wrap.services', 'RUN')
        })
        .config(function() {
            console.log('app-wrap.services', 'RUN')
        })

})();

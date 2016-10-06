(function() { //IIFE
    'use strit'; //oubli de déclaration -> pas d'espace global, + d'erreurs;

    var dependencies = [];
    /**
     *  Module
     *
     * Description
     */
    angular.module('app', dependencies).
    controller('name', [AppCtrl])
        .service('name', [AppService])
        .filter('format', [formatProvider])
        .filter('directive', [Appdirective])

    function Appctrl() {

    }

    function AppService() {

    }

    function formatProvider() {

    }

    function Appdirective() {

    }

})();
/*
+ (function() { //IIFE

})();

!(function() { //IIFE

})();
*/

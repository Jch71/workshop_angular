(function() {

    var moduleDependencies = [];
    var basePath = 'modules/ui/'

    angular.module('ui', moduleDependencies)
        .directive('uiButton', [uiButtonDirective])
        .directive('uiHeader', [uiHeaderDirective])
        .directive('uiAlert', ['$interval', uiAlertDirective])
        .directive('uiCssZoomable', [uiCssZoomableDirective])
        .run(function() {
            console.log('ui', 'RUN')
        })
        .config(function() {
            console.log('ui', 'CONFIG')
        })

    function uiCssZoomableDirective() {
        return {
            restrict: 'A',
            link: function postLink(scope, jqElement, jqAttrs) {
                jqElement[0].onclick = function() {
                    jqElement.toggleClass('zoom');
                }

            }
        };
    }

    function uiHeaderDirective() {
        return {
            templateUrl: basePath + 'ui-header.html',
            transclude: true,
            restrict: 'E'
        };
    }


    function uiButtonDirective() {
        return {
            templateUrl: basePath + 'ui-button.html',
            transclude: true,
            restrict: 'E',
            link: function postLink(scope, jqElement, jqAttrs) {
                if (jqAttrs.icon) jqElement.find('i').addClass('glyphicon-' + jqAttrs.icon);
                var levels = ['btn-primary', 'btn-danger', 'btn-success'];
                if (jqAttrs.level) jqElement.find('button').addClass(levels[jqAttrs.level]);

            }
        };
    }

    function uiAlertDirective($interval) {
        return {
            templateUrl: basePath + 'ui-alert.html',
            transclude: true,
            restrict: 'E',
            link: function postLink(scope, iElement, iAttrs) {
                scope.time = 12;
                /*$interval(function(){
                    scope.time--;
                    if(scope.time == 0) scope.message = '';
                },1000)*/

            }
        };
    }




})();

(function() {

    var moduleDependencies = [];
    var basePath = 'modules/ui/';

    angular.module('ui', moduleDependencies)
        .directive('uiButton', [uiButtonDirective])
        .directive('uiHeader', [uiHeaderDirective])
        .directive('uiAlert', ['$interval', uiAlertDirective])
        .directive('uiCssZoomable', [uiCssZoomDirective])

    .run(function() {
            console.log('ui.module', 'RUN')
        })
        .config(function() {
            console.log('ui.module', 'CONFIG')
        })


    function uiButtonDirective() {
        return {
            templateUrl: basePath + 'uiButton.html',
            transclude: true,
            restrict: 'E',
            //scope
            //false : dans le scope courant
            //true hérite du parent
            //
            link: function postLink(scope, jqElement, jqAttrs) {
                if (jqAttrs.icon) {
                    jqElement.find('i').addClass('glyphicon-' + jqAttrs.icon)
                }
                var levels = ['btn-primary', 'btn-success', 'btn-danger']
                if (jqAttrs.level)
                    jqElement.find('button').addClass(levels[jqAttrs.level])
            }
        };
    }

    function uiCssZoomDirective() {
        return {
            restrict: 'A',
            link: function postLink(scope, jqElement, jqAttrs) {
                jqElement[0].onclick = function() {
                    jqElement.toggleClass('zoom');
                }
            }
        };
    }

    function uiAlertDirective($interval) {
        return {
            templateUrl: basePath + 'uiAlert.html',
            transclude: true,
            restrict: 'E',
            link: function postLink(scope, iElement, iAttrs) {
                scope.time = 5;
                /*$interval(function() {
    scope.time--;
    if (scope.time == 0)
        scope.message = '';
}, 1000)
*/
            }
        };
    }

    function uiHeaderDirective() {
        return {
            templateUrl: basePath + 'uiHeader.html',
            transclude: true,
            restrict: 'E'
        };
    }
})();

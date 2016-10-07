(function() {

    var moduleDependencies = [];

    angular.module('shared.validators', moduleDependencies)
        .directive('letterOnly', [letterOnlyDirective])


    function letterOnlyDirective() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, iElement, iAttrs, ngModel) {

                ngModel.$validators.letterOnly = function(viewValue, modelValue) {
                    //if(!viewValue) return true;
                    return /^[a-zA-Z]+$/.test(viewValue);
                }

                ngModel.$formatters.push(function(value) {
                	if(!value) return;
                	return value.toUpperCase()
                });

                ngModel.$parsers.push(function(value) {
                	if(!value) return;
                	return value.toLowerCase()
                });

            }
        };
    }



})();

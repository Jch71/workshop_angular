# Angular avancé


## Structure et automatisation

> Adopter uen strucuture hyper-modulaire par feature.

Chaque fichier js est un angular.module.

[Bonne Pratiques](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)

Déterminer une structure (LIFT) qui supporte un worklow et un bon "build systeme"

## Conception avec les directives

**BluePrint des directivess**

```js

 .directive('name', [function () {


        return { //DDO Directive Definition Object
            priority: 0,
            template: '<div></div>', // function templateFn(){return HTMLString}
            templateUrl: 'directive.html', //function templateFn(){return URL}
            replace: true, // Deprecated
            transclude: true, // DummyComponent 
            restrict: 'A', // Utiliser EA -> Création:E, Modification:A
            scope: {}, // false,true,{},
            controllerAs: 'instanceName', 
            controller: function($scope, $element, $attrs, $transclude, otherInjectables) {
    
            },
            // Si vous avez une use case demandez vous ce que vous avez raté (template function)
            compile: function compile(tElement, tAttrs, transclude) {
                return function postLink(scope, iElement, iAttrs, controller) {
    
                }
            },
            // Greffe sur une logique plus modification DOM
            link: function postLink(scope, iElement, iAttrs) {
    
            }
        };
    }])

```


**Recettes**

```js

 .directive('Dummy', [function () {


        return { //DDO Directive Definition Object
            templateUrl: 'directive.html', //function templateFn(){return URL}
            transclude: true, // DummyComponent 
            restrict: 'E', // Utiliser EA -> Création:E, Modification:A
        };
    }])


 .directive('CSS', [function () {


        return { //DDO Directive Definition Object
            transclude: true, // DummyComponent 
            restrict: 'A', // Utiliser EA -> Création:E, Modification:A
            link: function postLink(scope, iElement, iAttrs) {
    
            }
        };
    }])

   .directive('Behaviour', [function () {

        return { //DDO Directive Definition Object
            transclude: true, // DummyComponent 
            restrict: 'A', // Utiliser EA -> Création:E, Modification:A
            link: function postLink(scope, iElement, iAttrs) {
    
            }
        };
    }])


.directive('Component', [function () {


        return { //DDO Directive Definition Object
            templateUrl: 'directive.html', //function templateFn(){return URL}
            restrict: 'E', // Utiliser EA -> Création:E, Modification:A
            scope: {}, // false,true,{},
            controllerAs: 'instanceName', 
            controller: function($scope, $element, $attrs, $transclude, otherInjectables) {
    
            }
        };
    }])


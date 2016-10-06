(function() {

    var moduleDependencies = ['app-wrap.services', 'app-wrap.controllers', 'app-wrap.routes'];

    angular.module('app-wrap', moduleDependencies)
        .run(function() {
            console.log('app-wrap.module', 'RUN')
        })
        .config(function() {
            console.log('app-wrap.module', 'RUN')
        })



})();

(function() {

    var moduleDependencies = [];

    angular.module('app-wrap.controllers', moduleDependencies)
        .run(function() {
            console.log('app-wrap.controllers', 'RUN')
        })
        .config(function() {
            console.log('app-wrap.controllers', 'RUN')
        })

    .controller('app-wrapCtrl', function($scope) {

    })


})();

(function() {

    var moduleDependencies = [];
    angular.module('app-wrap.routes', moduleDependencies)
        .run(function() {
            console.log('app-wrap.routes', 'RUN')
        })
        .config(function() {
            console.log('app-wrap.routes', 'RUN')
        })

    .config([configFn]);

    function configFn() {


    }


})();

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

(function() {

    var moduleDependencies = [];

    angular.module('shared.controllers', moduleDependencies)
        .run(function() {
            console.log('shared.controllers', 'RUN')
        })
        .config(function() {
            console.log('shared.controllers', 'RUN')
        })

    .controller('sharedCtrl', function($scope) {

    })


})();

(function() {

    var moduleDependencies = [];
    angular.module('shared.routes', moduleDependencies)
        .run(function() {
            console.log('shared.routes', 'RUN')
        })
        .config(function() {
            console.log('shared.routes', 'RUN')
        })

    .config([configFn]);

    function configFn() {


    }


})();

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

(function() {

    var moduleDependencies = ['shared.services', 'shared.controllers', 'shared.routes'];

    angular.module('shared', moduleDependencies)
        .run(function() {
            console.log('shared.module', 'RUN')
        })
        .config(function() {
            console.log('shared.module', 'RUN')
        })



})();

(function() {

    var moduleDependencies = [];

    angular.module('ui.controllers', moduleDependencies)
        .run(function() {
            console.log('ui.controllers', 'RUN')
        })
        .config(function() {
            console.log('ui.controllers', 'RUN')
        })

    .controller('uiCtrl', function($scope) {

    })


})();

(function() {

    var moduleDependencies = [];
    angular.module('ui.routes', moduleDependencies)
        .run(function() {
            console.log('ui.routes', 'RUN')
        })
        .config(function() {
            console.log('ui.routes', 'RUN')
        })

    .config([configFn]);

    function configFn() {


    }


})();

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

(function() {

    var moduleDependencies = ['ui.services', 'ui.controllers', 'ui.routes'];

    angular.module('ui', moduleDependencies)
        .run(function() {
            console.log('ui.module', 'RUN')
        })
        .config(function() {
            console.log('ui.module', 'RUN')
        })



})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC13cmFwL2FwcC13cmFwLmpzIiwiYXBwLXdyYXAvY29udHJvbGxlcnMuanMiLCJhcHAtd3JhcC9yb3V0ZXMuanMiLCJhcHAtd3JhcC9zZXJ2aWNlcy5qcyIsInNoYXJlZC9jb250cm9sbGVycy5qcyIsInNoYXJlZC9yb3V0ZXMuanMiLCJzaGFyZWQvc2VydmljZXMuanMiLCJzaGFyZWQvc2hhcmVkLmpzIiwidWkvY29udHJvbGxlcnMuanMiLCJ1aS9yb3V0ZXMuanMiLCJ1aS9zZXJ2aWNlcy5qcyIsInVpL3VpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZHVsZURlcGVuZGVuY2llcyA9IFsnYXBwLXdyYXAuc2VydmljZXMnLCAnYXBwLXdyYXAuY29udHJvbGxlcnMnLCAnYXBwLXdyYXAucm91dGVzJ107XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwLXdyYXAnLCBtb2R1bGVEZXBlbmRlbmNpZXMpXG4gICAgICAgIC5ydW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXBwLXdyYXAubW9kdWxlJywgJ1JVTicpXG4gICAgICAgIH0pXG4gICAgICAgIC5jb25maWcoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXBwLXdyYXAubW9kdWxlJywgJ1JVTicpXG4gICAgICAgIH0pXG5cblxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZHVsZURlcGVuZGVuY2llcyA9IFtdO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcC13cmFwLmNvbnRyb2xsZXJzJywgbW9kdWxlRGVwZW5kZW5jaWVzKVxuICAgICAgICAucnVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcC13cmFwLmNvbnRyb2xsZXJzJywgJ1JVTicpXG4gICAgICAgIH0pXG4gICAgICAgIC5jb25maWcoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXBwLXdyYXAuY29udHJvbGxlcnMnLCAnUlVOJylcbiAgICAgICAgfSlcblxuICAgIC5jb250cm9sbGVyKCdhcHAtd3JhcEN0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgIH0pXG5cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2R1bGVEZXBlbmRlbmNpZXMgPSBbXTtcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwLXdyYXAucm91dGVzJywgbW9kdWxlRGVwZW5kZW5jaWVzKVxuICAgICAgICAucnVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcC13cmFwLnJvdXRlcycsICdSVU4nKVxuICAgICAgICB9KVxuICAgICAgICAuY29uZmlnKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcC13cmFwLnJvdXRlcycsICdSVU4nKVxuICAgICAgICB9KVxuXG4gICAgLmNvbmZpZyhbY29uZmlnRm5dKTtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0ZuKCkge1xuXG5cbiAgICB9XG5cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2R1bGVEZXBlbmRlbmNpZXMgPSBbXTtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAtd3JhcC5zZXJ2aWNlcycsIG1vZHVsZURlcGVuZGVuY2llcylcbiAgICAgICAgLnJ1bihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcHAtd3JhcC5zZXJ2aWNlcycsICdSVU4nKVxuICAgICAgICB9KVxuICAgICAgICAuY29uZmlnKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcC13cmFwLnNlcnZpY2VzJywgJ1JVTicpXG4gICAgICAgIH0pXG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbW9kdWxlRGVwZW5kZW5jaWVzID0gW107XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnc2hhcmVkLmNvbnRyb2xsZXJzJywgbW9kdWxlRGVwZW5kZW5jaWVzKVxuICAgICAgICAucnVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NoYXJlZC5jb250cm9sbGVycycsICdSVU4nKVxuICAgICAgICB9KVxuICAgICAgICAuY29uZmlnKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NoYXJlZC5jb250cm9sbGVycycsICdSVU4nKVxuICAgICAgICB9KVxuXG4gICAgLmNvbnRyb2xsZXIoJ3NoYXJlZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAgIH0pXG5cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2R1bGVEZXBlbmRlbmNpZXMgPSBbXTtcbiAgICBhbmd1bGFyLm1vZHVsZSgnc2hhcmVkLnJvdXRlcycsIG1vZHVsZURlcGVuZGVuY2llcylcbiAgICAgICAgLnJ1bihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGFyZWQucm91dGVzJywgJ1JVTicpXG4gICAgICAgIH0pXG4gICAgICAgIC5jb25maWcoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hhcmVkLnJvdXRlcycsICdSVU4nKVxuICAgICAgICB9KVxuXG4gICAgLmNvbmZpZyhbY29uZmlnRm5dKTtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0ZuKCkge1xuXG5cbiAgICB9XG5cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2R1bGVEZXBlbmRlbmNpZXMgPSBbXTtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzaGFyZWQuc2VydmljZXMnLCBtb2R1bGVEZXBlbmRlbmNpZXMpXG4gICAgICAgIC5ydW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hhcmVkLnNlcnZpY2VzJywgJ1JVTicpXG4gICAgICAgIH0pXG4gICAgICAgIC5jb25maWcoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hhcmVkLnNlcnZpY2VzJywgJ1JVTicpXG4gICAgICAgIH0pXG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbW9kdWxlRGVwZW5kZW5jaWVzID0gWydzaGFyZWQuc2VydmljZXMnLCAnc2hhcmVkLmNvbnRyb2xsZXJzJywgJ3NoYXJlZC5yb3V0ZXMnXTtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdzaGFyZWQnLCBtb2R1bGVEZXBlbmRlbmNpZXMpXG4gICAgICAgIC5ydW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hhcmVkLm1vZHVsZScsICdSVU4nKVxuICAgICAgICB9KVxuICAgICAgICAuY29uZmlnKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NoYXJlZC5tb2R1bGUnLCAnUlVOJylcbiAgICAgICAgfSlcblxuXG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbW9kdWxlRGVwZW5kZW5jaWVzID0gW107XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgndWkuY29udHJvbGxlcnMnLCBtb2R1bGVEZXBlbmRlbmNpZXMpXG4gICAgICAgIC5ydW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndWkuY29udHJvbGxlcnMnLCAnUlVOJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNvbmZpZyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1aS5jb250cm9sbGVycycsICdSVU4nKVxuICAgICAgICB9KVxuXG4gICAgLmNvbnRyb2xsZXIoJ3VpQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSkge1xuXG4gICAgfSlcblxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZHVsZURlcGVuZGVuY2llcyA9IFtdO1xuICAgIGFuZ3VsYXIubW9kdWxlKCd1aS5yb3V0ZXMnLCBtb2R1bGVEZXBlbmRlbmNpZXMpXG4gICAgICAgIC5ydW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndWkucm91dGVzJywgJ1JVTicpXG4gICAgICAgIH0pXG4gICAgICAgIC5jb25maWcoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndWkucm91dGVzJywgJ1JVTicpXG4gICAgICAgIH0pXG5cbiAgICAuY29uZmlnKFtjb25maWdGbl0pO1xuXG4gICAgZnVuY3Rpb24gY29uZmlnRm4oKSB7XG5cblxuICAgIH1cblxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1vZHVsZURlcGVuZGVuY2llcyA9IFtdO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3VpLnNlcnZpY2VzJywgbW9kdWxlRGVwZW5kZW5jaWVzKVxuICAgICAgICAucnVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VpLnNlcnZpY2VzJywgJ1JVTicpXG4gICAgICAgIH0pXG4gICAgICAgIC5jb25maWcoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndWkuc2VydmljZXMnLCAnUlVOJylcbiAgICAgICAgfSlcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcblxuICAgIHZhciBtb2R1bGVEZXBlbmRlbmNpZXMgPSBbJ3VpLnNlcnZpY2VzJywgJ3VpLmNvbnRyb2xsZXJzJywgJ3VpLnJvdXRlcyddO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3VpJywgbW9kdWxlRGVwZW5kZW5jaWVzKVxuICAgICAgICAucnVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VpLm1vZHVsZScsICdSVU4nKVxuICAgICAgICB9KVxuICAgICAgICAuY29uZmlnKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VpLm1vZHVsZScsICdSVU4nKVxuICAgICAgICB9KVxuXG5cblxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

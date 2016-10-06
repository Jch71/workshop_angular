(function() {

    var moduleDependencies = [];

    angular.module('shared.services', moduleDependencies)
        .provider('Users', [UsersProvider])


    function UsersProvider() {


        this.$get = ['$http',UsersFactory];

        function UsersFactory($http) {

            function Users() {
                this.getData = function() {
                	console.log($http)
                    return {
                        "users": [
                            { "id": 1, "name": "renaud", "pic": "http://robohash.org/renaud" },
                            { "id": 2, "name": "maxcence", "pic": "http://robohash.org/maxcence" },
                            { "id": 3, "name": "aymen", "pic": "http://robohash.org/aymen" },
                            { "id": 4, "name": "jeancharles", "pic": "http://robohash.org/jeancharles" },
                            { "id": 5, "name": "joseph", "pic": "http://robohash.org/joseph" },
                            { "id": 6, "name": "elodie", "pic": "http://robohash.org/elodie" },
                            { "id": 7, "name": "alan", "pic": "http://robohash.org/alan" },
                            { "id": 8, "name": "cedric", "pic": "http://robohash.org/cedric" }
                        ]
                    }
                }
            }
            return new Users();
        }
    }



})();

(function() {

    var moduleDependencies = [];

    angular.module('shared.services', moduleDependencies)
        .provider('Users', ['$httpProvider', UsersProvider])


    function UsersProvider($httpProvider) {

        function UsersInterceptor() {
            return {
                request: function(config) {
                    if(config.url == 'http://fakebackand.com') config.url =  'http://localhost:3000/users';
                    //console.info(config.headers)
                    config.headers.Token = 'AX123456789';
                    return config;
                },

                requestError: function(config) {
                    return config;
                },

                response: function(res) {
                    return res;
                },

                responseError: function(res) {
                    return res;
                }
            }
        }


        $httpProvider.interceptors.push(UsersInterceptor)

       


        this.$get = ['$http', '$q', UsersFactory];

        function UsersFactory($http, $q) {

            function Users() {

                this.collection = [];

                this.getData = function() {

                    var defer = $q.defer()

                    $http.get('http://fakebackand.com').then(function(response) {
                        this.collection = response.data
                        defer.resolve(this.collection);
                    })

                    return defer.promise;


                    /* return {
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
                     }*/
                }
            }
            return new Users();
        }
    }



})();

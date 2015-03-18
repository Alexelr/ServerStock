// public/js/app/controllers.js

'use strict';

/* Controllers */

angular.module('Stock.controllers', [])
    .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.update =function(){
            $http.post("/api/update").succes(function(response){


            });
        }


        

        // Creamos una función para obtener los datos de la base de datos y actualizarlos cada que sea necesario.
        var getTodos = function() {
            $http.get("/api/updt").success(function(response) {
                if(response.status == "OK") {
                    $scope.todos = response.data;
                }
            });
        }

        

    }]);
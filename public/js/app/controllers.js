// public/js/app/controllers.js

'use strict';

/* Controllers */

angular.module('StockApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$http','$interval', function($scope, $http,$interval) {
        $scope.algo="esto funciona con angular";
        $scope.ok="confirmed";
        //$scope.count="5";
        $scope.date=Date.now();
        $scope.count= "Waiting 2000ms for update";
        //$timeout(function(){console.log('nada de nada desde angular con timeout')},1000);
  ///////////////////////////////////



  /////////////////////////////////////
    //probando codigo 
$interval(callAtInterval, 10000);


function callAtInterval() {
    
   
    $http.get("/api/updt").success(function(response) {
                if(response.status === "OK") {
                    console.log('OK en el status ------');

                    //////////////////////

                            $scope.date=response.data.data.created+"";
                             $scope.count = response.data.data.count;


                            $scope.ask1=response.data.data.ask1;
                            $scope.bid1=response.data.data.bidd1+"";
                            $scope.change1=response.data.data.changee1+"";
                            $scope.percent1=response.data.data.percentt1+"";


                            $scope.ask2=response.data.data.ask2;
                            $scope.bid2=response.data.data.bidd2;
                            $scope.change2=response.data.data.changee2;
                            $scope.percent2=response.data.data.percentt2;

                            $scope.ask3=response.data.data.ask3;
                            $scope.bid3=response.data.data.bidd3;
                            $scope.change3=response.data.data.changee3;
                            $scope.percent3=response.data.data.percentt3;

                            $scope.ask4=response.data.data.ask4;
                            $scope.bid4=response.data.data.bidd4;
                            $scope.change4=response.data.data.changee4;
                            $scope.percent4=response.data.data.percentt4;

                            $scope.ask5=response.data.data.ask5;
                            $scope.bid5=response.data.data.bidd5;
                            $scope.change5=response.data.data.changee5;
                            $scope.percent5=response.data.data.percentt5;
                            
                          

                   
                }
            }).error(function(){
                console.log('error en get http');
            });




}

//////////////////////////////////////////////////


  /////////////////////////////
         

            $scope.update=function(){
              
                $scope.count = "Timeout called!"+ i++;

                $http.get("/api/updt").success(function(response) {
                if(response.status === "OK") {
                    //$scope.ask1=response.data.ask1;

                    //////////////////////


                            $scope.ask1=response.data.data.ask1;
                            $scope.bid1=response.data.data.bidd1;
                            $scope.change1=response.data.data.changee1;
                            $scope.percent1=response.data.data.percentt1;


                            $scope.ask2=response.data.data.ask2;
                            $scope.bid2=response.data.data.bidd2;
                            $scope.change2=response.data.data.changee2;
                            $scope.percent2=response.data.data.percentt2;

                            $scope.ask3=response.data.data.ask3;
                            $scope.bid3=response.data.data.bidd3;
                            $scope.change3=response.data.data.changee3;
                            $scope.percent3=response.data.data.percentt3;

                            $scope.ask4=response.data.data.ask4;
                            $scope.bid4=response.data.data.bidd4;
                            $scope.change4=response.data.data.changee4;
                            $scope.percent4=response.data.data.percentt4;

                            $scope.ask5=response.data.data.ask5;
                            $scope.bid5=response.data.data.bidd5;
                            $scope.change5=response.data.data.changee5;
                            $scope.percent5=response.data.data.percentt5;


                   
                }
            }).error(function(){
                console.log('error en get http');
            });

            }


        

    }]);
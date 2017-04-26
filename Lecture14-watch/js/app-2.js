(function () {
	'use strict';

	angular.module('CounterApp', [])
		.controller('CounterController', CounterController);
    
    CounterController.$inject = ['$scope'];
    function CounterController($scope){
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.name = "Ujjwal Kumar";

        $scope.showNumberOfWatchers = function(){
            console.log("$$watchersCount : " + $scope.$$watchersCount);
        };
        
        $scope.countOnce = function(){
            $scope.onceCounter = 1;
        };
        
        $scope.upCounter = function(){
            $scope.counter++;
        }
        
        $scope.$watch(function(){
            console.log("Digest loop fired.");
        });
//        $scope.$watch('onceCounter', function(newValue, oldValue){
//            console.log("Old value(onceCounter) : " + oldValue);
//            console.log("New value(onceCounter) : " + newValue);
//        });
//
//        $scope.$watch('counter', function(newValue, oldValue){
//            console.log("Old value(counter) : " + oldValue);
//            console.log("New value(counter) : " + newValue);
//        });
    };
})();

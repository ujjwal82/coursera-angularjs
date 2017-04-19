(function(){
	'use strict';

	angular.module('MsgApp', [])
		.controller('MsgController',MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope){
        $scope.name = "Ujjwal";
        $scope.stateOfBeing = "happy";
        
        
        $scope.sayMessage = function(){
            $scope.name = "Ujjwal Kumar";
            return "Hello and welcome from Ujjwal.";
        };
        
        $scope.sadUjjwal = function(){
            $scope.stateOfBeing = "sad";
        }
        $scope.happyUjjwal = function(){
            $scope.stateOfBeing = "happy";
        }
    }

})();

(function(){
	'use strict';

	angular.module('MsgApp', [])
		.controller('MsgController',MsgController);
    
    MsgController.$inject = ['$scope', '$filter'];
    function MsgController($scope, $filter){
        $scope.name = "Ujjwal";
        $scope.stateOfBeing = "happy";
        $scope.cookieCost = .45;
        
        
        $scope.sayMessage = function(){

            var msg = "Ujjwal likes to be happy.";
            var output = $filter('uppercase')(msg);
            return output;
        };
        
        $scope.sadUjjwal = function(){
            $scope.stateOfBeing = "sad";
        }
        $scope.happyUjjwal = function(){
            $scope.stateOfBeing = "happy";
        }
    }

})();

(function () {
	'use strict';

	angular.module('MsgApp', [])
		.controller('MsgController', MsgController)
        .filter('loves', LovesFilter)
        .filter('truth', TruthFilter);
    
    MsgController.$inject = ['$scope', 'lovesFilter'];
    function MsgController($scope, lovesFilter){
        $scope.name = "Ujjwal";
        $scope.stateOfBeing = "happy";
        $scope.cookieCost = .45;
        
        $scope.sayMessage = function(){
            var msg = "Ujjwal likes to be happy.";

            return msg;
        };
        
        $scope.sayLovesMessage = function(){

            var msg = "Ujjwal likes to be happy.";
            var output = lovesFilter(msg);
            return output;
        };
        
        $scope.sadUjjwal = function(){
            $scope.stateOfBeing = "sad";
        }
        $scope.happyUjjwal = function(){
            $scope.stateOfBeing = "happy";
        }
    }
    
    function LovesFilter(){
        return function(input){
            input = input || "";
            input = input.replace("likes", "loves");
            
            return input;            
        }
        
    };

    function TruthFilter(){
        return function(input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            
            return input;            
        }
    };
})();

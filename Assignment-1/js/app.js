(function(){
	'use strict';

	angular.module('MsgApp', [])
		.controller('MsgController',MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope){
        $scope.message = "";
        
        $scope.checkTooMuch = function(){
            debugger;
            var res = $scope.itemsList.split(',');
            if(res.length ==0){
                $scope.message = "Please enter data first";
            }else if(res.length <=3){
                $scope.message = "Enjoy!";
            }
            else{
                $scope.message = "Too much!";
            }
        };
        
    }

})();

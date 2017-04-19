(function(){
	'use strict';

	angular.module('DIApp', [])
		.controller('DIController',DIController);
    
    function DIController($scope,
                           $filter,
                          $injector){
        $scope.name = "Ujjwal";
            
        $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
        
        $injector.annotate(DIController);
    }

    function AnnotateMe(name, job, blah){
        return "Hello"
    }
    
    console.log(AnnotateMe());
    console.log(AnnotateMe.toString());
    
})();
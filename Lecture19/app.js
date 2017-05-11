( function(){
	'use strict';

	angular.module('ShoppingListApp', [])
		.controller('ShoppingListController', ShoppingListController);

	var ShoppingList1 = ["Milk", "Donut", "Cookie", "Chlocolate", "Peanut butter", "Pepto Bismol",
	"Pepto Bismol(Chlocolate Flavor)", "Pepto Bismol(Cookie Flavor)"];

	var ShoppingList2 = [{name : "Milk", quantity : 4},
	{name : "Donut", quantity : 4},
	{name : "Cookie", quantity : 1},
	{name : "Chlocolate", quantity : 3},
	{name : "Peanut butter", quantity : 8},
	{name : "Pepto Bismol", quantity : 5},
	{name : "Pepto Bismol(Chlocolate Flavor)", quantity : 6},
	{name : "Pepto Bismol(Cookie Flavor)", quantity : 2}];

	ShoppingListController.$inject = ['$scope'];

	function ShoppingListController($scope){
		$scope.ShoppingList1 = ShoppingList1;
		$scope.ShoppingList2 = ShoppingList2;

		$scope.addToList=function(){
			var newItem = {
				name: $scope.newItemName, 
				quantity : $scope.newItemQuantity
			}
			$scope.ShoppingList2.push(newItem);
		}
	}

})();

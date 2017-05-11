
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number Array :" + numberArray);

function above5filter(value){
	return value >5;
}

var filteredNuberArray = numberArray.filter(above5filter);
console.log("Filtered Nuber Array : " + filteredNuberArray);

var ShoppingList = ["Milk", "Donut", "Cookie", "Chlocolate", "Peanut butter", "Pepto Bismol",
	"Pepto Bismol(Chlocolate Flavor)", "Pepto Bismol(Cookie Flavor)"];

console.log("Shopping List :" + ShoppingList);

var searchValue  = "Bismol";
function contailsFilter(value){
	return value.indexOf(searchValue) !== -1;
}

var searchedShoppingList = ShoppingList.filter(contailsFilter);
console.log("searched Shopping List : " + searchedShoppingList);
var parent = {
	value : "parentValue",
	obj: {
		objValue: "parentObjValue"
	},
	walk: function(){
		console.log("Walking!");
	}
}

var child = Object.create(parent);
console.log("CHILD - child.value : " + child.value);
console.log("CHILD - child.obj.objValue : " + child.obj.objValue);
console.log("PARENT - parent.value : " + parent.value);
console.log("PARENT - parent.obj.objValue : " + parent.obj.objValue);
console.log("PARENT  : " + parent);
console.log("CHILD : " + child);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("  *** CHNAGED  child.value = 'childValue'");
console.log("  *** CHNAGED  child.obj.objValue = 'childObjValue'");
console.log("CHILD - child.value : " , child.value);
console.log("CHILD - child.obj.objValue : " , child.obj.objValue);
console.log("PARENT - parent.value : " , parent.value);
console.log("PARENT - parent.obj.objValue : " , parent.obj.objValue);
console.log("PARENT  : " , parent);
console.log("CHILD : " , child);

console.log("child.obj === parent.obj ? ",child.obj === parent.obj);


var grandChild = Object.create(child);
console.log("Grand Child : ", grandChild);
grandChild.walk();
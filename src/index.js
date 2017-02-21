//Block Bindling :- Usage of let

//The variables declared using var is treated as if they are declared at the top of the function
// or as global . This is called hoisting. Example is as below :-
if(true) {
	var z = 99;
	console.log('z= '+z);
}
console.log('z= '+z);
//The scope of the variables declared with let, is confined to within the block . 
"use strict";
if(true) {
	let x =10;
	console.log(x);
}
//console.log(x); //Generates error.

//Constant declarations. constants are also blocked scoped.
function test_const() {
	const d =22;
	console.log('d='+d);
}
test_const();
//console.log('d='+d); //generates error.
//Constant objects
const obj = {
	name: 'Sam'
};
obj.name = "Harry"; //This is valid.
//obj = { name: "mark" } //This is invalid.

//Temporal Dead Zone :- 
//When a JavaScript engine looks through an upcoming block and finds a variable declaration, 
//it either hoists the declaration to the top of the function or global scope (for var) 
//or places the declaration in the TDZ (for let and const). 
//Any attempt to access a variable in the TDZ results in a runtime error.

//Functions in Loops example :-
var funcs =[];
for (var i = 0; i <= 10; i++) {
	funcs.push(function() {
		console.log(i);
	});
}
funcs.forEach(function(func){func();});

var funcs =[];
for (let i = 0; i <= 10; i++) {
	funcs.push(function() {
		console.log(i);
	});
}
funcs.forEach(function(func){func();});


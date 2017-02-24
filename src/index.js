//Proof of Concept Script 1
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

//Constants in for loop :-
//The behavior depends on the type of for loop.

//for(const i=0; i<10; i++) { --This will throw run time error . As constants cannot be modified.
//	console.log(i);
//}

//In the following area let and const act in same manner.
var func = [], objects = { 
	a: true,
	b: false,
	c: true
};
for(const key in objects) {
	func.push(function() {
		console.log(key);
	});
}
func.forEach(function(func) {
	func();
});

//When a var is declared as global. It becomes a property of the global object 'windows'.
//let declaration does not bind with global object.

//Proof of Concept Script 2
//Strings 

//Prior to ES6 javascript characters are revolved around 16 it character encoding. 
//the Unicode stated goal was to provide a global unique identifiers to evry characters. 
//These unique ids are called code points. All 2^16 code poinst are represented with 16 bit code unit.--Basic multi Lingual Plane.
// Those characters , whose code points cannot be represented via 16 bit code points, a supplementary code unit is introduced for them. 
//which are called supplementary units. (i.e. 16 bit + 16 bit , total 32 bit is used to represent that code point)

var text = "𠮷a";
console.log(text.length);
console.log(/^.$/.test(text));      
console.log(text.charAt(0));        
console.log(text.charAt(1));        
console.log(text.charCodeAt(0));    
console.log(text.charCodeAt(1)); 

//ECMA 6 added a function codePointAt --> returns unicode code point maps to a position in a string.
console.log(text.codePointAt(0));
console.log(text.codePointAt(1));
console.log(text.codePointAt(2));
console.log(String.fromCodePoint(134071)); 

//For reg ex pattern matching :- 'u' code is introduced.

//String methods :-
var data = "Hello  World!";
console.log(data.indexOf('H'));
console.log(data.includes('e'));
console.log(data.startsWith('H'));
console.log(data.endsWith('!')); 
console.log(data.includes('e', 1));
console.log(data.startsWith('H',0));
console.log(data.endsWith('!',0)); 
console.log("x".repeat(10));

//Reguler Expression and Flagged property :- kept for later.

//Template Literals :-






//Java script modules:-

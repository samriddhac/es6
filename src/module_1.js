"use strict";
//Javascript classes

//ECMA 5 type class declaration
function Person (name) {
	this.name=name;
}
Person.prototype.sayName = function() {
	console.log(this.name);
};

let perObj = new Person("Sam");
perObj.sayName();

//ECMA 6 class :-
class Person6 {
	constructor(name){
		this.name = name;
	}
	sayName(){
		console.log(this.name);
	}
}
let p = new Person6("John");
p.sayName();
//Class names are constants
class A {
	constructor(){
		//A ="B"; //Will throw an error :- Assignment to constant variable.
	}
}
let a = new A();
A="B";
console.log(A.name);
//Class expressions
let C = class {
	constructor(){
		this.cc = "ss";
	}
	sayName(){
		console.log(this.cc);
	}
}
let c = new C();
c.sayName();

//Named class expression
let F = class F1 {}
// the C1 class identifier exists only in the inside the class definition . 
//It does not exists outside the class definitions 
//First class citizen :- which can be passed as a value to a function.
function createObj(classDef) {
	return new classDef;
}
let obj = createObj(class D {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		console.log(this.name);
	}
});
obj.sayName();
//Singleton class :- by immediately invoking the class constrcutors 
let g = new class{
	constructor(){}
	sayG(){
		console.log("Hi");
	}
}();
g.sayG();
//Getter and setters in classes
class H {
	constructor(h) {
		this.h = h;
	}
	get g() {
		return this.g;
	}
	set g(g){
		this.g = g;
	}
}



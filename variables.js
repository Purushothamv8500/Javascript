// var 

var a = 10;
//console.log(a);

// redeclaration is allowed
console.log(a); 
a = 20;

// let 

let b = 10;
//console.log(b);

b = 20;                // reassign is allowed
console.log(b);



// constant 

const z = 30;
// z = 40; // Error: Assignment to constant variable
console.log(z); 


let _name = "John";
let $age = 25;
let userName = "Alice"; // CamelCase is a common convention


console.log(userName, $age, _name);


// global variable

var global = "global variable";

function ShowGlobal() {
    console.log(global);
}

ShowGlobal();

// local variable 

function myfunction() {
    var local = "local variable";
    console.log(local);
}
myfunction();


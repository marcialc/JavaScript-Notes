"use strict";

//What are different scopes in JS

let m = 1;

// foo is not a global variable with or without 'var'
function moo() {
    var foo = 1;
}


// Using 'var' creates global variables inside code block execpt in functions
for(var i=0; i<5; i++){
    var j = 10;
}


{
    let a  = "block";
}

// console.log(a)


// What is variale hoisting?

console.log(b)
var b = 2;

console.log("-----")

function goo() {
    var myA = 1;
    foo()
}


function foo() {
    console.log(myA)
}


goo()
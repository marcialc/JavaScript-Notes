
/*
Strick Mode 
- makes debugging code easier
- checks errors for example undeclared variables
- checks for reserved words 
- Checks for resevered words
*/

"use strict";

var theVal = 0;

theVal = 1;

if (theVal > 0) {
    console.log("Hello!")
}

// Get an error cant use reserved words
// var let = 1;

//Stops you from deleting variables or argument to funcs or functions
// var foo = 1;
// delete foo;

// function moo() {};
// delete moo;

var a = 4;
eval("var a = 1");


var b = { 'moo': false }

function foo(a) {
    a.moo = true;
}
foo(b);
console.log(JSON.stringify(b));

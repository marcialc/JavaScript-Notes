'use strict'
/* 
- Functions are objects there for they have properties
- meaning you can even add properties to functions
*/

function func() {
    console.log(this);
}

// func.moo = 2;
// func();

// console.log(func.moo)
// console.log(func.toString()); 

/* 
- call the function same as func()
- use call() to pass what you want it to be
- Ex. this inside func() poinst to the object {name : 'marcial'}
*/
func.call({name: 'marcial'}); 

// function a(b,c,d) {
//     console.log(this);
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }

// a.call(1,2,3,4)

// a.apply(1, [2,3,4]);


// APPLY VS CALL

function sum() {
    var total = 0;
    for(var i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

var things = [1,2,3,5,6,7,8,9,10]

// var x = sum.call(null, 1,2,3);
var x = sum.apply(null, things);

console.log(x);


/* 
BIND
- only works with function expressions
*/

var a = function() {
    console.log(this);
}.bind(1);

a();

var mac = {
    fun: a
}

mac.fun();
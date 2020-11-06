
function sayHello(name) {
    var text = 'Hello ' + name;
    return function() {
        console.log(text);
    }
}

var sayMarcial = sayHello('Marcial');
sayMarcial();

var foo = [];

for(let i=0; i<10; i++) {
    foo[i] = function() { return i; }
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());

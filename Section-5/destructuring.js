
const obj = { first: 'Marcial', last: 'Cabrera', age: 25};

// const { first: first, last: last } = obj;
const { first, last } = obj;

console.log(first)
console.log(last)

const arr = ['a', 'b'];

const [x,y] = arr;

console.log(x);
console.log(y)
 

// function f(options) {
//     console.log(options.x)
// }

function f({x=0}) {
    console.log(x)
}

f({x:1})
f({})

 
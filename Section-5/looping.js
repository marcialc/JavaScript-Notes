
let array = [1,2,3];

array.forEach(function(value) {
    console.log(value)
})

// for-in loop
// designed to work with objects

const obj = {a:1, b:2}

for(let prop in obj) {
    console.log(prop)
}

// for-of loop
// designed to work with arrays

for(let value of array) {
    console.log(value)
}
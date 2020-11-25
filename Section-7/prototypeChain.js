"use strict"

var animal = {
    kind: 'human'
};

console.log(animal);

// var mac = {};

// mac.__proto__ = animal;

var mac = Object.create(animal, {food: {value:'mango'}});

console.log(mac.kind);

console.log(animal.isPrototypeOf(mac));

mac.kind = 'igloo';

console.log(mac.kind);
console.log(animal.kind);

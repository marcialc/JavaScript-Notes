var animal = {
    kind: 'human'
};

console.log(animal);

// var person = {};

// person.__proto__ = animal;

var person = Object.create(animal, {food: {value: 'mango'}});

console.log(person.kind);

console.log(animal.isPrototypeOf(person));

person.kind = 'igloo';


console.log(person.kind);
console.log(animal.kind);
console.log(person);
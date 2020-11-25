"use strict"
/*
Working with Js tools natively 
*/

var Person = {
    // init: function(first_name, last_name) {
    //     this.first_name = first_name;
    //     this.last_name = last_name;
    //     return this;
    // },
    full_name: function() {
        return this.first_name + ' ' + this.last_name; 
    }
}

var Professional = Object.create(Person, {
    init: {
        value: function(horific, first_name, last_name) {
            this.horific = horific;
            this.first_name = first_name;
            this.last_name = last_name;
        }
    },
    professional_name: {
        value: function() {
            return this.horific + ' ' + this.first_name + ' ' + this.last_name;
        }
    }
});

//Can even
// Professional.init = function() ... 

var marcial = Object.create(Professional);

marcial.init('Dr', 'Marcial', 'Cabrera');

// function PersonFactory(first_name, last_name) {
//     var person = Object.create(Person);
//     person.first_name = first_name;
//     person.last_name = last_name;
//     return person;
// }

// var marcial = PersonFactory('Marcial', 'Cabrera')

// var marcial = Object.create(Person, {
//     first_name: {
//         value: 'Marcial'
//     },
//     last_name: {
//         value: 'Cabrera'
//     }
// });

// marcial.init('Marcial', 'Cabrera');


console.log(marcial.full_name());
console.log(marcial.professional_name());
"use strict";

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    // this.full_name = function() {
    //     return first_name + ' ' + last_name;
    // }
};

Person.prototype.full_name = function () {
    return this.first_name + ' ' + this.last_name; 
}

var dude = new Person("Marcial", "Cabrera");
dude.first_name = "Moo"


console.log(dude.full_name());  


function Professional(honorific, first_name, last_name) {
    Person.call(this, first_name, last_name);
    this.honorific = honorific;
}
 
//Sudo Classical Inheritance
Professional.prototype = Object.create(Person.prototype); //this is how we add inheritance in JS

Professional.prototype.professional_name = function() {
    return this.honorific + ' ' + this.first_name + ' ' + this.last_name;
};

var prof = new Professional('Dr', 'Marcial', 'Cabrera');

console.log(prof.professional_name);
console.log(prof.full_name());
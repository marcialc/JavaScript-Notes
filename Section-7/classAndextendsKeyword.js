
class Person {
    _firstName = "";
    _lastName = "";

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set firstName(name) {
        if(name === "") 
            console.error("firstName cannot be blank");
        else
            this._firstName = name;
    }

    set lastName(name) {
        if(name === "") 
            console.error("lastName cannot be blank");
        else
            this._lastName = name;
    }

    whoAreYou() {
        return `Hi I'm ${this.fullName()}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }

    whoAreYou() {
        return `${super.whoAreYou()} and I'm studying ${this.course}`;
    }
}

let marcial = new Student('Marcial', 'Cabrera', 'javascript');

console.log(marcial.whoAreYou());
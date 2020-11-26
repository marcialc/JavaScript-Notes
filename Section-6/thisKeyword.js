
/*
this keyword

 - refers to the object it belongs to
 - use strict does not allow default binding
 - in HTML handlers this refers to the HTML element that recieved the event
*/

// console.log(this)

// this.marcial = 1;

// function checkThis() {
//     console.log(this)
// }

// checkThis();

var person = {
    firstName  : "John",
    lastName   : "Doe",
    id     : 5566,
    myFunction : function() {
      return this;
    }
};

console.log(person.myFunction());

var marcial = {
    checkThis: function() {
        var self = this;
        console.log(self);

        function checkOther() {
            console.log(self);
            self.moo = 1;
        }

        checkOther();
        console.log(self.moo);
    } 
}

marcial.checkThis();
// console.log(marcial);

var func = marcial.checkThis;

func();
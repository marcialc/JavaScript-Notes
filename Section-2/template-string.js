
/*
Template String
*/

var isBold = false

var time = "morning";

let msg = `Hello
World
Tomorrow
${isBold ? "<b>morning</b>" : time}`

console.log(msg)

/*
Template String Tags
*/


function h1(strings, ...values) {
    let body = "";
    for(let i=0; i<strings.length; i++){
        body += strings[i] + (values[i] || "");
    }
    return body;
}

let name = 'marcial'
let place = 'world'
console.log(h1`hello ${place} my name is ${name}`);

/* 
FAT ARROW FUNCTION or ARROW FUNCTION

- simpler code
- solves this stability problem
*/


// setTimeout(() => {
//     console.log("setTimeout called!")
// }, 1000);

let cb = () => {
    console.log("setTimeout called!")
}

setTimeout(cb, 1000);

let add = (a,b) => a+b;

console.log(add(1,2))

let obj = {
    name: 'Marcial', 
    sayLater: function() {
        setTimeout(() => {
            console.log(`${this.name}`)
        },500)
    }
}

obj.sayLater();
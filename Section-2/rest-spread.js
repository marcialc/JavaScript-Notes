
/*
Rest Operator
*/

function foo(a, ...rest) {
    console.log(a)
    console.log(rest)
}

foo("head", 1, 2, 3, 4)


/*
Speard Operator
*/

var ar1 = [4, 5, 6]

var ar2 = [1, 2, 3, ...ar1]

console.log(ar2)


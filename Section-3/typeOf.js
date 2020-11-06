typeof(1)
"number"

typeof('a')
"string"

typeof(true)
"boolean"

typeof(undefined)
"undefined"

typeof(null)
"object"

typeof({})
"object"

let a  = null;

console.log(typeof(1))

/*
Difference between == and  ===

=== if there different types always be false, checks value and type

== it converts both value to be same type and checks 

*/

0 === 0
true

0 !== 1
true

0 == 0
true

0!= 1
true

'' == '0'
false

0 == ''
true

0 == '0'
true

0 === ''
false

0 === '0'
false

false == 'false'
false
// reason for false is trying to convert the string into a boolean

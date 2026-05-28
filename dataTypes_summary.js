/*
Primitive : call by Value NOT reference -> stores in Stack memory
 It is of 7 types
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt


    Primitive Data Types (7)
    |Data Type  | Example       | `typeof` Result |
    | --------- | ------------ | --------------- |
    | Number    | `10`, `3.14` | `"number"`      |
    | String    | `"hello"`    | `"string"`      |
    | Boolean   | `true`       | `"boolean"`     |
    | Undefined | `undefined`  | `"undefined"`   |
    | Null      | `null`       | `"object"` ⚠️   |
    | BigInt    | `123n`       | `"bigint"`      |
    | Symbol    | `Symbol()`   | `"symbol"`      |


    Examples:
    console.log(typeof 10)          // "number"
    console.log(typeof "Ajay")      // "string"
    console.log(typeof true)        // "boolean"
    console.log(typeof undefined)   // "undefined"
    console.log(typeof null)        // "object"
    console.log(typeof 123n)        // "bigint"
    console.log(typeof Symbol())    // "symbol"
*/

const val1 = 12
const val2 = 3.14
const bigNumber = 123452484804843094904902490404042904904904902094204409409429042904290904490224909042902n
const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(typeof val1)
// console.log(typeof val2)
// console.log(typeof bigNumber)
// console.log(id == anotherId) // false => Symbol everytime return diff values


/*
Non-Primitive (reference) -> stores in heap Memory
 Basically of 3 Types
    1. Array
    2. Objects
    3. Functions

    Non-Primitive (Reference) Types

    Type	    Example	            typeof Result
    Object	        {}	              "object"
    Array	        []	              "object"
    Function	function(){}	      "function"

    Examples:
    console.log(typeof {})            // "object"
    console.log(typeof [])            // "object"
    console.log(typeof function(){})  // "function"

*/

heroes = ["Rohit", "Dhoni", "Kohli"]
myObj = {
    "Name" : "Ajay",
    Mob : "9508406620"
}
myfunction = function(){
    console.log("Hello World")
}

console.log(typeof heroes)
console.log(typeof myObj)
console.log(typeof myfunction)
const accounId = 144553
let accountEmail = "ajay@1234.com"
var accountPassword = "12345"
accountCity = "Araria"
let accountState;


// accounId = 45 // not allowed

console.log(accounId)

accountEmail = "abc@gmail.com"
accountPassword = 683370
accountCity = "Mumbai"

console.table([accounId, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/



//-----------------------------------GFG----------------------------------------------//
// var example
var x = 10;
var x = 20;   // Re-declaration allowed
x = 30;       // Update allowed
console.log(x); // Output: 30


// let example
let y = 10;
// let y = 20; // Re-declaration NOT allowed
y = 25;       // Update allowed
console.log(y); // Output: 25


// const example
const z = 10;
// z = 20;     // Re-assignment NOT allowed
console.log(z); // Output: 10


// Block scope demonstration
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // Works (var is function/global scoped)
// console.log(b); //  Error (let is block scoped)
// console.log(c); //  Error (const is block scoped)
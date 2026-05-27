let score = 45

console.log(typeof score);
console.log(typeof(score))

//--------------------------------------------------------------------------------//

let score1 = "45"

console.log("--------------------------------------------------------------------------------------");
console.log(typeof score1);
console.log(typeof(score1))

let valueInNumber = Number(score1)

console.log(typeof(valueInNumber))


//-----------------------------------------**IMP**--------------------------------------//

let score2 = "45abc"

console.log("--------------------------------------------------------------------------------------");
console.log(typeof score2);
console.log(typeof(score2))

let valueInNumber1 = Number(score2)

console.log(typeof(valueInNumber1))
console.log(valueInNumber1)  //Be careful here NaN can also be converted using Number but it is not a valid number. so this is showing not a valid number

//----------------------------------------------------------------------------------------------------//

let score3 = "ajay"

console.log("--------------------------------------------------------------------------------------");
console.log(typeof score3);
console.log(typeof(score3))

let valueInNumber2 = Number(score3)

console.log(typeof(valueInNumber2))
console.log(valueInNumber2)  





//----------------------------------------Notes-------------------------------------------------------//
/*
"33" => 33
"33abc" => NaN
true => 1, false => 0
null => NaN
undefined => NaN
*/
//-----------------------------------------------------------------------------------------------------

console.log("--------------------------------------------------------------------------------------");

let isLoggedIn = 0

let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(typeof isLoggedbooleanisLoggedInIn)
console.log(booleanisLoggedIn)

//------------------------------------Notes-----------------------------------------------------------
/*
1 => true; 0 => false
"" => false; "ajay" => true
*/
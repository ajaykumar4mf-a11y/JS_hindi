const name = "Ajay"
const repoCount = 50

// console.log(name + repoCount + "Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//----------------------------------------------------------------------------------------------------------
let str = new String("Hello World")
// console.log(typeof str)  //object 

//----------------------------------------------------------------------------------------------------------

let str1 = str
str1 = "Hello G"
// console.log(str)
// console.log(str1)


// ******  some String methods
// console.log(name.length)

// console.log(name.charAt(0));

// console.log(name.indexOf('j'));

// console.log(name.toUpperCase())

// SYNTAX : str.substring(startIdx, endIdx)
// console.log(str.substring(6,9))  => can not handle -ve indexing , simply ignores and start with 0 index

// SYNTAX :  str.slice(startIdx, endIdx)
// console.log(str.slice(6, 9));
// console.log(str.slice(-4, 9));  // can handle -ve indexing , internally newIdx=(-ve Idx)+length, str.slice(newIdx, newIdx)


const newStr = "              Hello            "
// console.log(newStr)
// console.log(newStr.trim())

const url = "https://ajay.com/ajay%20yadav"
// // replace : SYNTAX -> str.replace(valToBeReplaced, newValue)
// console.log(url.replace('%20', '-'))

//Searches
//SYNTAX : str.includes(val)
// console.log(url.includes("ajay")) // true

const myGame = "ajay-g-cbcflll"
//Split
//SYNTAX : str.split(separator)
console.log(myGame.split('-'))
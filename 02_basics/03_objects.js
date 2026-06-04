// singleton -> objects formed using constructor
// Object.create



// object literals 

const mySym = Symbol("key1")
const jsUser = {
    name : "Ajay", //Internally "name": "Ajay"
    "full name" : "Ajay Kumar",  
    // mySym : "mykey1",          // value printed will be same as of below but typeof will give string
    [mySym] : "mykey1",           // // value printed will be same as of below but typeof will give symbol
    age: 18,
    location: "Jaipur",
    email: "ajay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser['email'])
// console.log(jsUser['full name'])
// console.log(jsUser[mySym])                 //Special for symbol without {""}


//overwriting values
jsUser.email = "ajay45@gmail.com"

//freezing values of object
// Object.freeze(jsUser)
jsUser.email = "ajay07@gmail.com"

console.log(jsUser)

//adding function
jsUser.greeting = function(){
    console.log("Hello JS User");
}

//console.log(jsUser.greeting) //Undefined
console.log(jsUser.greeting()) 

jsUser.greeting2 = function(){
    console.log(`Hello JS User : ${this["full name"]}`);
}

console.log(jsUser.greeting2()) 
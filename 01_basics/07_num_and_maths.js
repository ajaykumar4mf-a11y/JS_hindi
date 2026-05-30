const balance = 100
// console.log(balance)

const bal2 = new Number(100)
// console.log(bal2)  -> objects

// console.log(bal2.toString().length)  {Number to string conversion}

// console.log(bal2.toFixed(1))    {fixed no. of digits after decimal}

// toPrecision  -> converts nums to string and round off the numbers to specified digits
const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(4))  //23.90
// console.log(otherNumber.toPrecision())   //23.8966   {default value}
// console.log(otherNumber.toPrecision(8))  //23.896600


const hundreds = 10000000
// To apply commas
// console.log(hundreds.toLocaleString())           //10,000,000
// console.log(hundreds.toLocaleString(en-IN))      //10,000,000


//-------------------------------------------------MATHS-------------------------------------------------------
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.min(4, 3, 6, 8))
// console.log(Math.max(4, 3, 6, 8))

// console.log(Math.random())       //Ranges -> [0-1]
// console.log(Math.random()*10) 

//To avoid 0 we add 1 
// console.log((Math.random()*10)+1)  

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min))
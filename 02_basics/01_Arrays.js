const myArr = [0, 1, 2, 3, 4, 5, "shaktiman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0])
// console.log(myArr[1])

// console.log(typeof myArr)
// console.log(typeof myArr2)


//Methods 
// myArr.push(6)                //push element at the end
// console.log(myArr)

// myArr.pop()                 // pop element from end and return that
// console.log(myArr)

// myArr.unshift("Ajay")         //push element at the begining
// console.log(myArr)

// myArr.shift()                  // pop element at the begining and return that
// console.log(myArr)


// console.log(myArr.includes(2))      //true
// console.log(myArr.includes(11))     // false

// console.log(myArr.indexOf(2))          // If element present returns index else returns -1
// console.log(myArr.indexOf(10))

const newArr = myArr.join()             // converts array to string
// console.log(`${myArr} and type is ${typeof myArr}`)
// console.log(`${newArr} and type is ${typeof newArr}`)


//*********** slice and splice
/*slice -> returns the copy of segment of original array. It does NOT MANIPULATES original array
SYNTAX : arr.slice(startIdx, endIdx) -> endIdx is excluded
*/ 
//splice -> returns segments of original array. It MANIPULATES the original array.

// console.log("A->", myArr)
// const newA1 = myArr.slice(1, 4)
// console.log(newA1)
// console.log("B->", myArr)

// console.log("X->", myArr)
// const newA2 = myArr.splice(1, 4)
// console.log(newA2)
// console.log("Y->", myArr)



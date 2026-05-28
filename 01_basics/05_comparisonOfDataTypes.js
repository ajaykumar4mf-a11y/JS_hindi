// console.log(5 > 3)
// console.log(5 >= 3)
// console.log(5 < 3)
// console.log(5 <= 3)
// console.log(5 == 3)


//----------------------------------------------------------------------------------------------------------//
// console.log("2" > 1)
// console.log("02" > 1)

/*
 Internally JS will convert string to number {Number("2") > 1}={2 > 1} which will give true 
*/
//----------------------------------------------------------------------------------------------------------//



//----------------------------------------------------------------------------------------------------------//
console.log(null > 0)  //false {(Number(null) > 0) => (0 > 0)}
console.log(null == 0) //false {Special case in case of equality(==) ; null == null,undefined}
                       // so, {(null == 0) => directly false}
console.log(null >= 0) //true {(Number(null) >= 0) => (0 >=0)}

console.log(undefined == 0) // false {since (undefined only equals to undefined or null)}. so directly false
console.log(undefined > 0)  // {(Number(undefined) > 0) => (NaN > 0) => false (bcz comparison of anything with NaN is false)}
console.log(undefined < 0)  // {(Number(undefined) < 0) => (NaN < 0) => false (bcz comparison of anything with NaN is false)}

/*
 Note:-
    **(1). In case of comparison of diff dataTypes all the dataTypes are firstly converted to number,
       then comparison takes place
    (2). Special case for (==)
        undefined == undefined or null
        null == undefined or null
*/
//----------------------------------------------------------------------------------------------------------//
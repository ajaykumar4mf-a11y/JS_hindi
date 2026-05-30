let myDate = new Date()
// console.log(myDate)
// .toString(): Returns a long string with the day, date, time, and your specific timezone (e.g., Wed Jan 24 2024 12:00:00 GMT+0000).
// console.log(myDate.toString()) 

// .toDateString(): Strips away the time and timezone, leaving just the readable date (e.g., Wed Jan 24 2024).
// console.log(myDate.toDateString())

//.toLocaleString(): Formats the date and time based on your local region's conventions (e.g., 1/24/2024, 12:00:00 PM).
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)                  //object


// SYNTAX : Date(YYYY, MM, DD, HH)
// let myCreatedDate = new Date(2024, 0, 24)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate1 = new Date(2024, 0, 24, 4)
// console.log(myCreatedDate1.toLocaleString())

// "YYYY-MM-DD"
let myCreatedDate = new Date("2024-01-24")
// console.log(myCreatedDate)

//"MM-DD-YYYY"
// let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate)
// console.log(myCreatedDate.toLocaleDateString())

// let myTimeStamp = Date.now()               // Return milliseconds till mow
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())         // return milliseconds till the declared date


/*
 Retrieving Date Components
    You can retrieve various parts of a date using the following methods:

    getFullYear(): Returns the full year (e.g., 2024).
    getMonth(): Returns the month (0 for January, 11 for December).
    getDate(): Returns the day of the month (1-31).
    getDay():  Returns the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    getHours(): Returns the hour (0-23).
    getMinutes(): Returns the minutes (0-59).
    getSeconds(): Returns the seconds (0-59).
    getMilliseconds(): Returns the milliseconds (0-999).
*/

// console.log(myDate.getDate())     // Gets the day of the month (1-31)
// console.log(myDate.getDay())      // Gets the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
// console.log(myDate.getMonth())    // Gets the month (0-11, where 0 is January)
// console.log(myDate.getFullYear()) // Gets the 4-digit year (e.g., 2024)


//custom manipulation of DateString
// myDate.toLocaleDateString('default', {
//     weekday: "long",
//     timeZone: ''
// })
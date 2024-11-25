// Date?
let myDate = new Date()
// this is date methods 
console.log(myDate. toString())
// Converts the Date object to a string representing the specific date and time.
// Example output: "Thu Apr 06 2023 12:05:38 GMT+0900 (Japan Standard Time)"


toDateString():

// Converts the Date object to a string representing only the date part in a human-readable form.

// Example output: "Thu Apr 06 2023"
console.log(myDate.toDateString())



// Converts the Date object to a string in the ISO format, which is often used in JSON serialization.

// Example output: "2023-04-06T03:05:38.123Z"
console.log(myDate.toJSON())


toLocaleDateString():

// Returns a string with a locality-sensitive representation of the date.

// Note that this method should be called as a function: myDate.toLocaleDateString().

// Example output: "4/6/2023" (format may vary based on locale settings)
console.log(myDate.toLocaleDateString)
toLocaleString():

// Returns a string with a locality-sensitive representation of the date and time.

// Example output: "4/6/2023, 12:05:38 PM" (format may vary based on locale settings)
console.log(myDate.toLocaleString())

// date is Object in js
console.log(typeof myDate)

let mydate = new Date(2023,0,23)
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())

let Mydate = new Date("2024-04-14")
console.log(Mydate.toLocaleString())

let indianDateformate = new Date("01-04-2024")
console.log(indianDateformate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)


let mytime =new Date(2023 , 1 ,23)
console.log( mytime.getTime());
// get time is used to select spical time duration in a date

// insecound
console.log(Math.floor(Date.now()/1000))

let newDate =new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getTime())
console.log(newDate.getFullYear())

// date with string interpolption
//  `${newDate.getDate()} and the time is`

//  this is important and it is help to define tine more propertity
 newDate.toLocaleDateString('default',
  {
    weekday:"long"
 })



 

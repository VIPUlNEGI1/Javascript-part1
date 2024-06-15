// Date?
let myDate = new Date()
// this is date methods 
console.log(myDate. toString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString)
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



 

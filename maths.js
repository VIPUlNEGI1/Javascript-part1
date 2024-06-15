const number= 5000
console.log(number)




// this is the way to dedicate spical cast the number
const balance = new Number(1000)
console.log(balance)

console.log(balance.toString().length, typeof(balance))
// with the help of tofixed we can do this in procigian value=> 100.000 
console.log(balance.toFixed(3))





// 1 case

const otherNUmmber = 34.34567
console.log(otherNUmmber.toPrecision(3))

// toprecision  is used to gives 12.3234 this but
 
// 2cas?
const errornumber=2234.33
console.log(errornumber.toPrecision(3))

// 3 case
const limitless=323.33
console.log(limitless.toPrecision(3))




const thousand =1000000
 console.log(thousand.toLocaleString())
// this toLocaleString is used to coma (,) in the value
//  but

console.log(thousand.toLocaleString('en-IN'))
// this is used to give coma (,) is indian number system style because toLocaleString() by default using us number system


//=============maths==================



console.log(Math)


console.log(Math.abs(-4))
// this abs funcation is used to convert negitive value into positive value


console.log(Math.round(4.9))
console.log(Math.round(4.3))
// this round funcation is used to roundoff values
//                   ^


console.log(Math.ceil(4.2))
// ceil is used to round off the small values to high value for example( 4.2=> 5)

console.log(Math.floor(4.9))
// floor  is opposide to the ceil because it is used to not roundoff the value 

console.log (Math.min (4,5,3,5,7,8,2,3,0))
// it is used to fin to lowest value in array


// pppp
// this is important
console.log(Math.random());
// Math.random  givan a value always unde 0-1 
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10 )+1)


// it is formula
const min =10
const max =20
console.log(Math.floor(Math.random() * (max - min +1))+min)





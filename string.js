const name ="vipul"
const repocount =10

// console.log(name +repocount)
// but this is outdated type to add tow datatypes

// new(morden) way (it's  called string interpolation )
console.log(`My name is ${name} and i have ${repocount} different different repo` )


// secound way to declare string
const vipul1 = new String('vipul')
// how to excess key value pair
console.log(vipul1[0]);
console.log(vipul1[2]);

// how to excess prototype??
console.log(vipul1.__proto__)

// how to excesslenth
console.log( vipul1.length)

// apply to uppercase
console.log(vipul1.toUpperCase())

// how to find any charecter in our variable
console.log(vipul1 .charAt(3))

// pind our variable positation
console.log(vipul1.indexOf('l')) 

const vipul9 =vipul1.substring(0,3)
console.log(vipul9)


let vipul3='vipul is the foad coder in googel'
const vipul4 =vipul3.slice(0,10)
console.log (vipul4)

// how to change value and spaces i a url and syntex
const url="https://vipul.com/vipul%20negi"
console.log(url.replace('%20','-'))

// how to found any keyword is in the syntex or not
const word ="vipul is the intelligent personn because it is doing very hard work in web devlopment"
console.log(word.includes('intelligent'))
console.log(word.includes('diya'))


// important?
// string have so many prototype method and this is very important to learn 
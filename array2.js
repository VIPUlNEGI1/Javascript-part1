const marvel_heros=['thor','ironman','capiten marvel']
const dc_heros=['superman','flash','batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// push are use to add array to array as a datatype

// but?
// concat is used to murze 2 array and return new array
const allheros =marvel_heros.concat(dc_heros)
console.log(allheros)


// its called spred operator it used to muaze tow array 
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)


// how to spred out array in complex array
const another_array =[1,2,3,[4,5,7],[2,4,3,2 ,[2,3,4] ]]
const reat_antoher_array =another_array.flat(3)
console.log(reat_antoher_array)

// this is few valuws to convert array and do other thisngs
 console.log(Array.isArray("vipul"))
 console.log (Array.from("vipul"))

//  but?
console.log(Array.from({name: "vipul negi"})) 
// in this case we give a instruction convert the key value into Array

let num1=100
let num2=200
let num3=300
let num4=400

console.log(Array.of(num1,num2,num3,num4))

// this case we are convart different variable in array

// is array from array  this  are reading topic
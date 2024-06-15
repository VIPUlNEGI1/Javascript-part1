// arrays
// how to declare array in js
const myarray = [1,2,3,4,5,6,true,'vipul']

const myarray1=new Array(1,2,3,4,5,'vipul', 'nik')

// how to excess array in js
console.log(myarray[5]) 

// array methods

myarray.push(6)
myarray.push(7)
console.log(myarray)
// push funcation is mostimportant funcation in array it is used to add a data ((valye)in array

myarray.pop()
console.log(myarray)
// pop is  used to remove the last value 


myarray.unshift(4)
console.log(myarray)
// this unshiftis used to add element in front of the array but it is very taking compalition time because we are add some element in front the all element was shifted memory location

myarray.shift()
// shift is used to remove the element front of the array
console.log(myarray)


// ask the question
console.log(myarray.includes(9))
console.log(myarray.includes(3))
// includes is used to the question 9 in the array or not
console.log(myarray.indexOf(7))
console.log(myarray.indexOf('vipul'))
// this is help you find value position

// how to change array into string
const marray = myarray.join()
console.log(marray)
console.log(typeof marray)

console.log("A",myarray)
// it return a stction of array
const myn2 = myarray.slice(1,3)
console.log(myarray)
console.log("B",myarray)

const my2 =myarray.splice(1,3)
console.log(marray)









// slice,splice (ravice because iam not understand)
// const myarra=[1.,3,8,9,4]
// const myarra1=[3,4,5,6,4,1]
// console.log ("A", myarra);


// const myn1 =myarra.slice(1,3)

// console.log(myarra1)
// console.log("B", myarra)

// const myn2 =myarra1.splice(1,3)
// console.log("C", myarra)
// console.log(myn2)

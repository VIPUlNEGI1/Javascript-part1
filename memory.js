// ****************memory***************
// // there are tow types of memory 
// 1>stack 
// it is used for primitive datatypes. in the stack we change the value by refrence (copy) in the stack 
// 2>heap
// it is used to non promitive datatypes.but uin the heep we are change actule value.

let userone ={
    email: "user@googel.com",
    upi:"user@ybl"
}
let userTwo = userone
userTwo.email = "vipul.com"

console.log(userone.email)
console.log(userTwo.email)
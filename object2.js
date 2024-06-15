// thsi is singleton value//
// const tinderUser = new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="vipul"
tinderUser.islogin=true
//console.log(tinderUser);

const regularUser={
    email :'vipul@gmail.com',
    fullname:{
        // we can do this
        userfullname:{
            firstname:"vipul",
            lastname:"negi"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser.fullname?.firstname?.lastname);
// this "?" is used to some time we have no value any variable this is used to this time

const obj1 ={ 1:'a' ,2:'b'}
const obj2={3:"a",4:"b"}
// how to combine two object
// const obj3= Object.assign(obj1,obj2) this is worng and show error
// console.log(obj3);

// this is wirte way
const obj3 =Object.assign({},obj1,obj2)
// {} this is optional but it is good for combine the objects

// this is advance way to assign the objects or combine the objects
const obj4={...obj1,...obj2}
//console.log(obj3);


// this is array object
const usre=[
    {
        id :1,
        email:"vipul@gmail.com"
    },

    {
        id:2,
        email:"rahul@gmail.com"

    },
    
    {
        id:3,
        email:"rajiv@gmail.com"
    },
]

usre [1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


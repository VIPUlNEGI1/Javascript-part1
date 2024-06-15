// singleton what is ? searchyourtube
// singleton pattern is probably the most widly used designe . it is a simple pattern ,and it is used in eccess and in scenarios where it is not required 
// object literals
//  we can define objects in two types >lilater
//                                     >constructure
Object.creat // this is themplateliters method


const vipul ={

    name :'vipul',
    age :12, location:"dehradun",
    email:"23dfhj8@gmail.com", 
    islogin:false,
    lastlogindays:['monday','tuesday'],
   "vipul negi":"vipul"
}//this is object by singleton method

// how to excess the objects
// there are two yaw to excess the objects
console.log(vipul.email)
console.log(vipul['email'])

// how to overwrite the value in objects
vipul.email="99vipul88r1@gmail.com"

// how to make any object constant(never change in overwright) in object
Object.freeze(lastlogindays)


// q=>1 how to define and declare a symbol in object this is imp
const mySymbol=Symbol("R1")

const rajan={
[mySymbol]:"R1"
}
console.log(rajan[mySymbol])
console.log(typeof[mySymbol])

// how to add funcation in objects
// problem
vipul.greeting= funcation(){
    console.log("hellow js user");

}

//  how to eccess the objects in funcations
vipul.greetingtwo = funcation(){
    console.log(`hello js user, ${this.name }`);
}
console.log(vipul.greeting());
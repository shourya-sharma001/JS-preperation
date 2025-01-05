//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap(Non -  primitive)

// Stack => All of the primitive type of datatypes are stored in stack. Infact the it stores the copy of the variable declared by you.

// Heap => All of the non-primitive type of datatypes are stored in heap. Infact the it stores the original variable declared by you, all the changes that ou make is made inside of the original variable.

let myEmailId = "shourya@google.com";

let anotherName = myEmailId;
anotherName = "sshourya2233@google.com";

console.log(myEmailId);
console.log(anotherName);

//==================

let userOne = {
    userName: "Shourya",
    UPI: "user@ybl"
}

let userTwo = {
    userName: "Rupansh",
    UPI: "user2@ybl"
}
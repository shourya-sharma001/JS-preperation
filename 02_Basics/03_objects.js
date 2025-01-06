 //There are two ways to declare an object...
 // a. As a literal.
 // b. As a constructor

 //** There is a concept of singleton. When we make an object using constructor, a singleton object is formed, means it is a single object of its own kind. When we declare an object using literal, singleton is not formed.

 // =====================================================================
//     LITERALS
// ********************************************************************

const mySym = Symbol("key1"); 

const JsUser = {
    name: "Shourya",
    "full name" : "Shourya Sharma",
    [mySym] : "MyKey",
    age : 23,
    location: "Delhi",
    email: "shourya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

//Two ways of accessing the object:

// console.log(JsUser.email);
// console.log(JsUser["email"]);//GOOD PRACTICE

// console.log(JsUser["full name"])

// console.log(JsUser[mySym]);//It have a different syntax other than others, if we write or define the symbol using the other common syntax which we use on others, we can get the value of the symbol but the datatype will not be correct.


// JsUser.email = "shourya@chatgpt.com";

// Object.freeze(JsUser);//used to freeze/fix the value of any key/variable inside an object.


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
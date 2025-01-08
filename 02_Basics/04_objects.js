// const tinderUser = new Object(); //Singleton Object

const tinderUser = {} //Non-singleton object.
tinderUser.id = "123abc";
tinderUser.name = "Chris";
tinderUser.isloggedIn = false;

// console.log(tinderUser)

const regularUser = 
{
    email: "someone@gmail.com",
    fullname: {
        userfullname: 
        {
            firstName: "Shourya",
            lastname: "Sharma"
        }
    }
}

// console.log(`${regularUser.fullname.userfullname.firstName} ${regularUser.fullname.userfullname.lastname}`);

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "A" , 4:"B"}
const obj3 = {5: "@", 6: "$"}
// const obj4 = Object.assign({},obj1,obj2,obj3);//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "S@gmail.com",
        fullname1: {
            firstName1 : "Sonu",
            lastname1: "Lata",
        }
    },
    {
        id: 1,
        email: "S@gmail.com",
        fullname1: 
        {
            firstName1: "sONU",
            lastname1: "lATA"
        } 
    },
    {
        id: 1,
        email: "S@gmail.com",
        fullname1: 
        {
            firstName1: "sONU",
            lastname1: "lATA"
        } 
    },
    {
        id: 1,
        email: "S@gmail.com",
        fullname1: 
        {
            firstName1: "sONU",
            lastname1: "lATA"
        } 
    },
    {
        id: 1,
        email: "S@gmail.com",
        fullname1: 
        {
            firstName1: "sONU",
            lastname1: "lATA"
        } 
    },
]


// console.log(users[4].fullname1.lastname1)

// console.log(tinderUser);

// // console.log(Object.keys(tinderUser));//it will return a seperate array of the keys.
// // console.log(Object.values(tinderUser));//it will return a seperate array of values.
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


// ===================================================================

                            // DESTRUCTURING OF OBJECT
//*********************************************************************


const course = {
    courseName: "js-Basics to advance",
    courseInstructor: "Shourya",
    price: 699
}

// const {courseInstructor} = course;
const {courseInstructor: instructor} = course;

const {price} = course;


console.log(instructor);


//This is JSON, so we can say that the JSON is an object, but the major difference between normal object and JSON is it is does not have any name and is not stored in a variable(atleast yet), but we will store this in a variable in future.
// {
//     "name": "SHourya",
//     "coursename": "js Basic to advance",
//     "price": "free"
// } //In JSON, the keys and the values both are strings.

// refer: https://api.github.com/users/hiteshchoudhary.

[
    {},
    {},
    {}
]
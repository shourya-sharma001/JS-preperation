const user = {
    username: "Shourya",
    price: 999,
    welcome: function()
    {
        console.log(`${this.username} , welcome to website`)//Here this is used to point the current context, sort of uses the concept of scoping to decide so.

        console.log(this)
    }
}


// user.welcome()
// user.username = "Sammy"
// user.welcome()



// *************************** NOTE **********************************

//
// 
// 1. In node environment, when we run this keyword without any global context, it will be refering to an empty object because of absence of global context.

//2. In browser, window is the global object.
//********************************************************************
 
// =====================================================================

    // function shourya()
    // {
    //     console.log(this)
    // }                     

    // console.log(shourya());

//When we declare the single this keyword in a function declared like this in node enironment, we get multiple values.  


// function shourya()
//     {
//         username: "Sharma"
//         console.log(this.username)
//     }                     

//     console.log(shourya()); 
    //Undefined as 'this' context works only in the objects not in function.


    const shourya = () => {
        console.log(this)
    } 

    shourya(); //Gives the empty object as there is nothing in global context.

    // const addTwo = (num1,num2) => {
    //     return num1+ num2;
    // }

//================================ OR ==============================    


// const addTwo = (num1,num2) =>  num1+ num2;

// ================================ OR ==============================   



// const addTwo = (num1,num2) =>  num1+ num2;


// ===================== OR ==============    


// const addTwo = (num1,num2) => (num1+ num2);


// ===================== OR ==============    


const addTwo = (num1,num2) => ({username: "Shourya", email: "s@gmail.com"}); //In order to return an object by an arrow function.



console.log(addTwo(1,2));
// ================================ OR ==============================


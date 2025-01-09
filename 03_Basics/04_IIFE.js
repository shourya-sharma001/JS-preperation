//IIFE(Immediately Invoked Function Expressions), are used to prevent any function from getting polluted by global scope content.


//========================METHOD 1============================

// function chai()
// {
//     console.log('DB connected');
// }
// chai()



// ===========================METHOD 2========================

(function chai()
{
    console.log('DB connected');
})(); //Here, if we ever make an IIFE, we should provide a semicolon(;) as if we don't do this, the IIFE will not understand that where does it have to stop the context.

( () => {
    console.log("DB 2 connected")
})();


( (name) => {
    console.log(`DB 2 connected ${name}`)
})("Shourya");
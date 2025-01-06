// // //  let myDate = new Date()

// // //  console.log(myDate);


// // //  console.log(myDate.toString());

// // //  console.log(myDate.toISOString());

// // //  console.log(myDate.toDateString());

// // //  console.log(myDate.toJSON());

// // //  console.log(myDate.toLocaleDateString());

// // //  console.log(myDate.toLocaleString());

// // //  console.log(myDate.toLocaleTimeString());

// // //  console.log(typeof(myDate)); //Object.


// // // //  let myCreatedDate = new Date(2025, 0, 6);

// // // //  console.log(myCreatedDate); // The month in JS starts from zero(0).


// // // // console.log(myCreatedDate.toDateString()); // Converts the date to the string format.

// // let myCreatedDate = new Date(2025, 0, 23, 15 , 3);

// // console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2025-01-06");
// console.log(myCreatedDate.toLocaleString());



// =====================================================================

let myTimeStamp = Date.now();

console.log(myTimeStamp);//Gives the result in the miliseconds from 1973.


console.log(myCreatedDate.getTime());// Gives the output in milisecond from the date provided by us.

console.log(Math.floor(Date.now()/1000));//To convert the miliseconds to seconds.

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
});
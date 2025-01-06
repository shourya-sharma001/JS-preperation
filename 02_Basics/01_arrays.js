// // //ARRAY

       const myArr = [0,1,2,3,4,5]
// // const heros = ["Shaktiman", "IronMan"];

// // const myArr2 = new Array(1,2,3,4)
// // console.log(myArr[1]);


// // //Array Methods...

// // myArr.push(6);
// // console.log(myArr);// 0,1,2,3,4,5,6.

// // myArr.pop();//Pops out the last element of the array.
// // console.log(myArr); //0,1,2,3,4,5

// // myArr.unshift(8);//Adds the value to the start of the array. 
// // console.log(myArr);//8,0,1,2,3,4,5. 

// // myArr.shift();//Removes the value from the start of the array. 
// // console.log(myArr);


// // console.log(myArr.includes(17));//Asks the array that the provided data is present in the array or not.

// // console.log(myArr.indexOf(3));// Tells the index value of the provided data.

// let newArr = myArr.join();// Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(newArr);




//SLICE, SPLICE

console.log("Original: ", myArr);// Returns the original array

let myn1 = myArr.slice(1,3); //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
console.log("Sliced value: ",myn1); // It just copies the value from the original array.It doesnot manipulate the original array.
console.log("Array after slicing:", myArr) 

let myn2 = myArr.splice(1,3); //Removes the Element from the point defined in the argument and returns the array including the end point argument(i.e 3).It manipulates the original array.


console.log("Spliced value: ",myn2);// Cuts the section of the array for which the arguments are passed.
console.log("Array after splicing: ", myArr);




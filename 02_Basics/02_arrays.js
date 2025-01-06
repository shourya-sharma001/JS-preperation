const marvel_heros = ["Thor", "IronMan", "Spiderman"]; 
const dc_heros = ["Superman", "Batman" , "Flash"];

// ==================================================================
//     PUSH
// ******************************************************************



// marvel_heros.push(dc_heros);// Not a good practice, this method will merge the two arrays together and will store the second array as an element in the first array. Infact the second array will be indexed just as the elements in the first element.

// console.log(marvel_heros);

// console.log(marvel_heros[3][0]); //To access the array inside another array.


//======================================================================
//  CONCAT
// ************************************************************


// const all_heros = marvel_heros.concat(dc_heros);//Will give the same result as the push. But the major difference between push and concat is that the PUSH adds the value to the existing array while the CONCAT returns the new array.

// console.log(all_heros);

// =====================================================================
//     SPREAD
// ********************************************************************


const all_new_heros = [...marvel_heros, ...dc_heros];//Now here the 2 arrays are not arrays anymore now the elements in those arrays are individual in itself.

console.log(all_new_heros);

// =====================================================================
//     FLAT
// ********************************************************************
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]


const real_another_array = another_array.flat(Infinity);//The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.


// =====================================================================
//     ISARRAY
// ********************************************************************

console.log(Array.isArray("Shourya"))// Asks the array is this is an array or not.


// =====================================================================
//     FROM
// ********************************************************************


console.log(Array.from("Shourya"))// This will convert the input provided to an array.

console.log(Array.from({ name: "SHARMA"}));//Will return an empty object. We have to provide what we want like to make an array of the keys or of value.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));//Returns a new array from a set of elements.
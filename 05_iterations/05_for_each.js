const coding = ["js", "java", "python", "cpp"]

coding.forEach(function(item){
     //console.log(item);
})//forEach is sort of a callback function which is used to iterate over the items in an array. As this is a callback function so we dont have to provide any name of the function.

coding.forEach((value) => {
    //console.log(value);
})

// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe);


coding.forEach((item, index, arr) => {
   // console.log(item,index, arr)
   
})//This shows that the forEach call back function can store multiple parameters in it.

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})
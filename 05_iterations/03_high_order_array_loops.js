const arr = [1,2,3,4,5]

for(const num of arr)
{
    // console.log(num)
}

const greeting = "Hello world!"
for(const greet of greeting)
{
    // console.log(`Each char is: ${greet}`)
}




//Maps :=> The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. Stores the value in the order while the normal objects don't. The map object stores the unique values.

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('FR' , "France")



// console.log(map);

for(const key of map)
{
    // console.log(key);
}

for(const [key, value] of map) // To de structure the array and to print the key and value differently
    {
        console.log(`${key} :`);
        console.log(`${value}`);
    }

    const myObject =
    {
        'game1' : 'NFS',
        'game2' : 'Spiderman'
    }

    // for (const key of myObject) //We cannot access or itterate over objects like this.
    //      {
        
    //     console.log(key) 
    // }
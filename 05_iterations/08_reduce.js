// ===========================================================

                        // REDUCE
// ***********************************************************

const myNums = [1,2,3,4]

// const initialValue = 0;
// const sumWithInitial = myNums.reduce((accumulator, currentValue) => accumulator + currentValue)

// console.log(sumWithInitial);

// *****************

// const sumWithInitial = myNums.reduce(function(acc, currval)
// {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0)


// **************************************************************

const myNum2 = [1,2,3,4]
const sumWithInitial2 = myNum2.reduce((accumulator, currentValue) => accumulator + currentValue,0)

console.log(sumWithInitial2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay);
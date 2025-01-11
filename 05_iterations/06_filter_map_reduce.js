const coding = ["js", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    console.log(item)
    return item;
})//forEach loop will never return anything even if we provide it to do so. It will return 'undefined'

console.log(values);
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItem (arr,query){
    return arr.filter((el)=>el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItem(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItem(fruits, "an")); // ['banana', 'mango', 'orange']
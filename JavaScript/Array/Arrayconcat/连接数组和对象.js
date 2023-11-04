const obj ={
    1:'hello',
    2:'world',
};

const arr1 = [obj,3];
console.log(arr1);

const obj2 ={
    3:'this is a string',
}

const arr2 = arr1.concat(obj2);
console.log(arr2); // [ { '1': 'hello', '2': 'world' }, 3, { '3': 'this is a string' } ]


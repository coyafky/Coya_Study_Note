// 一个非数组对象

const arrayLike ={
    length :3,
    0: "a",
    1: "b",
    2: "c",
    3: 345, // ignored by every() since length is 3
};

console.log(Array.prototype.every.call(arrayLike, function(item){
    return typeof item === "string";
}));

// true



// 数组

const array =["a", "b", "c", "d"];

console.log(Array.prototype.every.call(array, function(item){
    return typeof item === "string";
}));

// true



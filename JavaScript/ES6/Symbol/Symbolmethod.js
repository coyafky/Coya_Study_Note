class Person{
    static [Symbol.hasInstance](param){
        console.log(param);
        console.log("我被用来检测类型了");
        return false;
    }
}

let o = {};

console.log(o instanceof Person);

const arr = [1,2,3];
const arr2 = [4,5,6];
arr2[Symbol.isConcatSpreadable] = false;
console.log(arr.concat(arr2));


// {}
// 我被用来检测类型了
// false
// [ 1, 2, 3, [ 4, 5, 6, [Symbol(Symbol.isConcatSpreadable)]: false ] ]


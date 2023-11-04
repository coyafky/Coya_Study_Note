function isEven(element,index,array){
    return element % 2 === 0;
}
function func(){
    let arr = [1,2,3,4,5,6,7,8,9,10];

    let value = arr.every(isEven);
    console.log(value);
}

func(); // false
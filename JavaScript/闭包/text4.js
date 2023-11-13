function ounterFunction (){
    let count = 0;
    function PlusOne(){
        count++;
        return count;
    }

    function minusOne(){
        count--;
        return count;
    }

    return {
        PlusOne:PlusOne(),
        minusOne:minusOne()
    }
}

const innerFunc = ounterFunction();

console.log(innerFunc.PlusOne); //1
console.log(innerFunc.minusOne); //0
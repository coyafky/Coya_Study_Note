const higherOrder =n =>{
    const doSometing = m=>{
        const doWhatEver = t=>{
            return 2*n+3*m+t
        }
        return doWhatEver;
    }
    return doSometing;
}

console.log(higherOrder(2)(3)(10));
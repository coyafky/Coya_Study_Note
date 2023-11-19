let ressss = a1rr.every((cur, ind, arr) => {
 
    if(ind == arr.length-1) return true
    return arr[ind + 1] && arr[ind + 1] - cur == 1

});
console.log(ressss)
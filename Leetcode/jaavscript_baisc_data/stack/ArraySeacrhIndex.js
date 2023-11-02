
let nums = [1,3,5,6], target = 5;

var SearchInsert = function(nums,target){
    let index =0;
    for(let i=0;i<=nums.length;i++){
        if(target===nums[i]){
            index =i;
            break;
        }
    }
    return index;
}

console.log(SearchInsert(nums,target));
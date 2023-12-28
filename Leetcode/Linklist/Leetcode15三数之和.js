var threeSum = function(nums) {
    const len = nums.length;
    const set = new Set();
    const res =[];

    for (let i=0 ;i<len-2;i++){
        const num1 =nums[i];
        for(let j=i+1;j<len-1;j++){
            const num2 =nums[j]
            for(let k=j+1;k<len;k++){
                if(num1+num2+nums[k] ===0){
                    const arr =[num1,num2,nums[k]];
                    const str = arr.sort((a,b)=>a-b).join('')
                    if(set.has(str)){
                        continue
                    }
                    set.add(str);
                    res.push(arr)
                }

            
              
            }
        }
    }
};

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));

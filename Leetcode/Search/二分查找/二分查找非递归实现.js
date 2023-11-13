
//目标数组：  array  ，匹配数字是 arr
const search  = function (array,num){   
    let left =0 
    let right = array.length-1
  
    for(let i=left;i<=right;i++){
        let mid = Math.floor((left+right)/2);
        if(array[i]==num){
            return i;
        }

        
        if(array[i]>num){
            right = mid-1;
        }


        if(array[i]<num){
            left = mid+1;
        }
    }

    // 不符合的情况就返回-1
    return -1;
}

const array =[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
console.log(search(array,12));
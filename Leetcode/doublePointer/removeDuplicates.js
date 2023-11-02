// 使用快慢指针

var removeDuplicates = function (nums) {
  // 如果数组长度=1直接忽略
  if (nums.length <= 1) {
    return nums;
  }
  // 定义快慢指针
let slow = []
  for (let fast = 0; fast < nums.length; fast++) {
    if(nums[fast]!==nums[slow]){
        nums[slow]=nums[fast];
        slow++;
    }
  }
  return slow;

};

let nums = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums));
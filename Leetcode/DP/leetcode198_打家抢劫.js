var rob = function(nums) {
   if(nums.length === 1){
    let dp =nums[0];
   } 
   if(nums.length === 2){
    let dp = Math.max(nums[0],nums[1]);
   }

   for(let i = 2; i < nums.length; i++){
    dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i]);
   }

   return dp(nums.length-1)
};

let threeSum = (nums) => {
    if (nums.length < 3) {
        return [];
    }

    let result = [];
    nums = nums.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i];
        if (a > 0) {
            return result;
        }
        if (i > 0 && a === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let b = nums[j];
            let c = nums[k];
            let sum = a + b + c;
            if (sum === 0) {
                result.push([a, b, c]);
                while (j < k && nums[j] === b) {
                    j++;
                }
                while (j < k && nums[k] === c) {
                    k--;
                }
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return result;
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

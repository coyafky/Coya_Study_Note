const binarySelectionSort = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
      let min = left;
      let max = right;
      
      // Find the minimum and maximum elements in the remaining unsorted portion
      for (let i = left; i <= right; i++) {
        if (arr[i] < arr[min]) {
          min = i;
        }
        if (arr[i] > arr[max]) {
          max = i;
        }
      }
      
      // Swap the minimum element with the leftmost element in the unsorted portion
      if (min !== left) {
        [arr[min], arr[left]] = [arr[left], arr[min]];
      }
      
      // If the maximum element was swapped with the leftmost element,
      // update its index to reflect the new position
      if (max === left) {
        max = min;
      }
      
      // Swap the maximum element with the rightmost element in the unsorted portion
      if (max !== right) {
        [arr[max], arr[right]] = [arr[right], arr[max]];
      }
      
      // Move the boundaries of the unsorted portion inward
      left++;
      right--;
    }
    
    return arr;
  };
  
  const unsortedArr = [29, 72, 98, 13, 87, 66, 52, 51, 36];
  const sortedArr = binarySelectionSort(unsortedArr);
  console.log(sortedArr);
  
function isPositive(element) {
    return element > 0;
  }
  
  console.log([1, 2, 3, 4, 5].every(isPositive));  // true
  console.log([1, 2, 3, 4, -5].every(isPositive));  // false
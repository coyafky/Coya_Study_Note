function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3)); // 输出：6
  console.log(sum(4, 5, 6, 7)); // 输出：22
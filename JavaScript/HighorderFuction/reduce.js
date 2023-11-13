var numbers = [1, 2, 3, 4, 5];

function sum(acc, number) {
  return acc + number;
}

var total = numbers.reduce(sum, 0);
console.log(total); // 输出：15

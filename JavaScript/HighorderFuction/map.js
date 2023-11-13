var numbers = [1, 2, 3, 4, 5];

function double(number) {
  return number * 2;
}

var doubledNumbers = numbers.map(double);
console.log(doubledNumbers); // 输出：[2, 4, 6, 8, 10]

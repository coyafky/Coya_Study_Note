var numbers = [1, 2, 3, 4, 5];

function isEven(number) {
  return number % 2 === 0;
}

var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // 输出：[2, 4]

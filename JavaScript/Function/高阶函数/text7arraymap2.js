// 假设我们有一个包含不同人的出生年份的数组，并且我们想要创建一个包含他们年龄的数组。例如：

const birthYear = [1975, 1997, 2002, 1995, 1985];
const  age = birthYear.map((year) => 2023 - year);
console.log(age); //  [ 48, 26, 21, 28, 38 ]

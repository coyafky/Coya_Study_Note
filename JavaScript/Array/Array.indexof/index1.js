// 创建一个数组
const colors = ['red', 'blue', 'green', 'yellow', 'blue', 'purple'];

// 使用 lastIndexOf() 方法查找数组中元素的位置
const indexOfBlue = colors.lastIndexOf('blue');
const indexOfOrange = colors.lastIndexOf('orange');

// 输出结果
console.log('Index of "blue":', indexOfBlue); // 输出：4（因为最后一次出现在数组中的位置是索引 4）
console.log('Index of "orange":', indexOfOrange); // 输出：-1（因为数组中不存在 "orange"）


// filter() 方法创建一个新数组，其中包含通过所提供函数实现的测试的所有元素。
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);
console.log(longWords); // [ 'exuberant', 'destruction', 'present' ]
// longWords is ["exuberant", "destruction", "present"]
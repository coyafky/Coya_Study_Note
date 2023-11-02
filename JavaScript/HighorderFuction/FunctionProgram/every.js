
// every：检查所有元素是否在某一方面相似。它返回布尔值

const name =['Asabeneh', 'Mathias', 'Elias', 'Brook']

const areAllStrings = name.every(item => typeof item === 'string');
console.log(areAllStrings);
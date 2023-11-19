// 一个数组的元素是否全在另一个数组中
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// let check_subset = (first_array, second_array) => {
// 	return second_array.every((element) => first_array.includes(element));
// };

// console.log(
// 	"Subset Condition Satisfies? : " + check_subset([1, 2, 3, 4], [1, 2])
// );
// console.log(
// 	"Subset Condition Satisfies? : " + check_subset([1, 2, 3, 4], [5, 6, 7])
// );

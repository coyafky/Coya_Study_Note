// 需要被排序的数组
const data = ["delta", "alpha", "charlie", "bravo"];

// 用于存放位置和排序值的对象数组
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
});

// 按照多个值排序数组
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);
// compareFn 可能会在数组中的每个元素上调用多次。根据 compareFn 的性质，这可能会产生很高的开销。如果 compareFn 执行的工作更多，需要排序的元素更多，使用 map() 进行排序可能更有效率。其思路是遍历数组一次，将用于排序的实际值提取到一个临时数组中，对临时数组进行排序，然后遍历临时数组以获得正确的顺序。
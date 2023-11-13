// 创建一个函数，用于创建一个迭代器，用于生成一个指定范围内的数字序列
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    // 定义一个变量，用于记录当前的索引
    let nextIndex = start;
    // 定义一个变量，用于记录当前的迭代次数
    let iterationCount = 0;
  
    // 定义一个迭代器，用于生成一个指定范围内的数字序列
    const rangeIterator = {
      // 定义一个next方法，用于获取下一个值
      next: function () {
        let result;
        // 如果当前的索引小于指定的结束索引，则表示未到结束
        if (nextIndex < end) {
          // 将当前的索引值赋值给result
          result = { value: nextIndex, done: false };
          // 将当前的索引值加上指定的步长
          nextIndex += step;
          // 将迭代次数加1
          iterationCount++;
          // 返回result
          return result;
        }
        // 如果当前的索引大于等于结束索引，则表示到结束
        return { value: iterationCount, done: true };
      },
    };
    // 返回迭代器
    return rangeIterator;
  }
  
  // 创建一个迭代器，用于生成一个指定范围内的数字序列
  let it = makeRangeIterator(1, 10, 2);

// 调用迭代器的next方法，获取第一个值
let result = it.next();
// 当迭代器未到结束时，循环获取值
while (!result.done) {
  // 打印当前的值
  console.log(result.value); // 1 3 5 7 9
  // 获取下一个值
  result = it.next();
}

// 打印迭代次数
console.log("Iterated over sequence of size: ", result.value); // 5
function jumpSearch(array, target) {
    // 计算出跳跃步长
    const jumpStep = Math.floor(Math.sqrt(array.length));
  
    // 从数组的第一个元素开始，每隔跳跃步长进行比较
    let current = 0;
    while (current < array.length) {
      if (array[current] === target) {
        return current;
      } else if (array[current] < target) {
        current += jumpStep;
      } else {
        // 跳出 while 循环
        break;
      }
    }
  
    // 如果没有找到目标元素，则返回 -1
    return -1;
  }
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const index = jumpSearch(array, 5);
  console.log(index); // 4
  
const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
  };
  console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
  // [ 'a', 'b' ]
  // filter() 方法读取 this 的 length 属性，然后访问每个整数索引。
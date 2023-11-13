const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
  };
  Array.prototype.push.call(arrayLike, 1, 2);
  console.log(arrayLike);
  // { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' 
const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
  };
  console.log(Array.prototype.shift.call(arrayLike));
  // undefined, because it is an empty slot
  console.log(arrayLike);
  // { '1': 4, length: 2, unrelated: 'foo' }
  
  const plainObj = {};
  // There's no length property, so the length is 0
  Array.prototype.shift.call(plainObj);
  console.log(plainObj);
  // { length: 0 }
  
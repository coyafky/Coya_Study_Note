function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  const result = fnInside(5); // returns 8
  const result1 = outside(3)(5); // returns 8
  
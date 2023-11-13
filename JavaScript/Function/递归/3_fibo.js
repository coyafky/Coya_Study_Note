function fibonacci() {
    const cache = {};
    const f = function(n) {
      if (n in cache) {
        return cache[n];
      }
      if (n <= 1) {
        return n;
      }
      const result = f(n - 1) + f(n - 2);
      cache[n] = result;
      return result;
    };
    return f;
  }
  
  const fib = fibonacci();
  console.log(fib(10)); // 55
  console.log(fib(20)); // 6765
  
  
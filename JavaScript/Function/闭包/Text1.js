function counter() {
    var count = 0;
    return function() {
      count++;
      console.log(count);
    };
  }
  var increment = counter();
  increment(); // 输出 1
  increment(); // 输出 2
  increment(); // 输出 3
  
  
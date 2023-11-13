
// 函数组合示例
function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  var addAndMultiply = function(a, b, c) {
    return multiply(add(a, b), c);
  };
  
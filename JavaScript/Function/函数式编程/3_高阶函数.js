// 高阶函数示例
function map(array, transform) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      result.push(transform(array[i]));
    }
    return result;
  }
  
  var numbers = [1, 2, 3];
  var doubledNumbers = map(numbers, function(num) {
    return num * 2;
  });
  
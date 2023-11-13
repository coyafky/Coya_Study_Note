var global = 'Hello, I am a global variable :)';

(function () {
  // 在函数的作用域中下面的变量是私有的

  var myGrades = [93, 95, 88, 0, 55, 91];

  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);

    return 'Your average grade is ' + total / myGrades.length + '.';
  }

  var failing = function(){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});

    return 'You failed ' + failingGrades.length + ' times.';
  }

  console.log(failing());
  console.log(global);
}());

// 控制台显示：'You failed 2 times.'
// 控制台显示：'Hello, I am a global variable :)'
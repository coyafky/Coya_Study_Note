// 循环中的函数
//  var的特性在循环中创建函数问题存在比较多

var fucn = [];

for (var i = 0; i < 10; i++) {
  fucn.push(function () {
    console.log(i);
  });


}

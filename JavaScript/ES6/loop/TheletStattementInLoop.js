// 循环中的let 声明

var funcs = [];
var object = {
  a: true,
  b: true,
  c: true,
};
for (let key in object) {
  funcs.push(function () {
    console.log(key);
  });
}

funcs.forEach(function (func) {
  func();
});
//a
//b
//c
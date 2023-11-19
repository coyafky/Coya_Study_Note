//rest 参数必须要放到参数最后
function fn(a, b, ...args) {
  console.log(a);
  console.log(b);
  console.log(args);
}
fn(1, 2, 3, 4, 5, 6);

// 1
// 2
// [ 3, 4, 5, 6 ]

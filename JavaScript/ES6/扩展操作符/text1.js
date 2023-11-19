// 『...』 扩展运算符能将『数组』转换为逗号分隔的『参数序列』
//声明一个数组 ...
const tfboys = ["易烊千玺", "王源", "王俊凯"];
// => '易烊千玺','王源','王俊凯'

// 声明一个函数
function chunwan() {
  console.log(arguments);
}

chunwan(...tfboys); // chunwan('易烊千玺','王源','王俊凯')

// [Arguments] { '0': '易烊千玺', '1': '王源', '2': '王俊凯' }
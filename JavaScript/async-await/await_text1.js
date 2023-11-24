//创建 promise 对象
const p = new Promise((resolve, reject) => {
  // resolve("用户数据");
  reject("失败啦!");
});

// await 要放在 async 函数中.
async function main() {
  try {
    let result = await p;
    //
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
//调用函数
main();

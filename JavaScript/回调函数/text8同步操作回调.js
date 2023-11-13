// 定义myFilter方法
Array.prototype.myFilter = function (callback) {
    // 此方法返回一个新数组，先定义好
    let res = [];
    for (let i = 0; i < this.length; i++) {
      item = this[i];
      if (callback(item, i)) { 
       // 这里的封装是在调用回调函数（这里就是“里应”），里面的参数item，i都是实参
      // 又因为这里调用时约定好了传参顺序，也就决定了定义时的形参顺序。
        res.push(item);
      }
    }
    return res;
  }
  
  // test
  let arr = [1, 2, 3, 4, 0];
  
  // 这里是在定义回调函数，是按照封装时的约定来传参的，这里就是“外合”
  let res = arr.myFilter((item, index) => {
    return (item % 2 === 0);
  })
  
  console.log(res); // [ 2, 4, 0 ]
   // 发送 AJAX 请求, 返回的结果是 Promise 对象
   function sendAJAX(url) {
    return new Promise((resolve, reject) => {
        //1. 创建对象
        const x = new XMLHttpRequest();

        //2. 初始化
        x.open('GET', url);

        //3. 发送
        x.send();

        //4. 事件绑定
        x.onreadystatechange = function () {
            if (x.readyState === 4) {
                if (x.status >= 200 && x.status < 300) {
                    //成功啦
                    resolve(x.response);
                }else{
                    //如果失败
                    reject(x.status);
                }
            }
        }
    })
}

//promise then 方法测试
// sendAJAX("https://api.apiopen.top/getJoke").then(value=>{
//     console.log(value);
// }, reason=>{})

// async 与 await 测试  axios
async function main(){
    //发送 AJAX 请求
    let result = await sendAJAX("https://api.apiopen.top/getJoke");
    //再次测试
    let tianqi = await sendAJAX('https://www.tianqiapi.com/api/?version=v1&city=%E5%8C%97%E4%BA%AC&appid=23941491&appsecret=TXoD5e8P')

    console.log(tianqi);
}

main();
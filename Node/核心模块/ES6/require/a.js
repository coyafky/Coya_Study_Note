const logIt = require('./b');
console.log('我是 a 文件');
exports.say = function(){
    const message = logIt();
    console.log(message);
}

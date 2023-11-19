const say = require('./a');
const obj = {
   name:'b 文件的 object 的 name',
   author:'b 文件的 object 的 author'
}
console.log('我是 b 文件');
module.exports = function(){
    return obj
}

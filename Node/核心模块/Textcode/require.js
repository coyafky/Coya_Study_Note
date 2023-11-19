
const a = require('./a.js');
const add = require('./b.js');
const c = require('./c.js');
const d = require('./d.js');
console.log(a); // hello world
console.log(add(1,2)); // 3
console.log(c);//2
console.log(d); // { num: 6 }

d.num =7;
console.log(d); // { num: 7 }
 //声明一个 set
 let s = new Set();
 let s2 = new Set(['大事儿','小事儿','好事儿','坏事儿','小事儿']);

 //元素个数
 console.log(s2.size);
 //添加新的元素
 s2.add('喜事儿');
 //删除元素
 s2.delete('坏事儿');
 //检测
 console.log(s2.has('糟心事'));
 //清空
 s2.clear();
 console.log(s2);

 for(let v of s2){
     console.log(v);
 }
 
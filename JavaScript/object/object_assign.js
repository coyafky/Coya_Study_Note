let  dest,src,result;
dest ={};
src ={id:"src"};
result =Object.assign(dest,src);

console.log(src);
console.log(dest);
console.log(result);
// { id: 'src' }
// { id: 'src' }
// { id: 'src' }

console.log(dest === src);// false
console.log(dest === result); // true
console.log(dest !== src); // true


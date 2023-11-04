

let items = [1,2,3,4,5,6,7,8,9,10];

function process(item){
    console.log(item);
}
    
for (var i =0;i<=10;i++){
    process(items[i]);
}

// 这里可以访问到i
console.log(i); 

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// undefined
// 11


// 使用let 块级作用域访问不到i


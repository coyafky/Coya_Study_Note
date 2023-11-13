//  第三个是 Object.values()


let obj ={
    a:1,
    b:2,
    c:3
}

let values = Object.values(obj);

for(let i = 0;i<values.length;i++){
    console.log(values[i]);
}


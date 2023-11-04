
let obj ={
    a:1,
    b:2,
    c:3
}

//  是 Object.keys()



let keys = Object.keys(obj);
for(let i=0;i<keys.length;i++){
    console.log("obj."+keys[i]+"="+obj[keys[i]] );

}

// obj.a=1
// obj.b=2
// obj.c=3




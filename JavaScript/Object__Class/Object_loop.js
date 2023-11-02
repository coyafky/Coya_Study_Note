// for in

var obj ={
    a:1,
    b:2,
    c:3
};

for (var prop in obj){
    console.log("obj"+prop+" = "+obj[prop]);

}




var obj2 ={
    a:1,
    b:2,
    c:3
}
var key = Object.keys(obj2)
for (var i=0;i<=keys.length;i++){
    console.log("obj." + keys[i] + " = " + obj[keys[i]]);
}

// 第三个是 Object.values()

var obj3 = {a:1,b:2,c:3};
var values = Object.values(obj3);

for (let i=0;i<values.length;i++){
    console.log(values[i]);
}
// 第四个是Object.entries()
var obj4 = {a:1,b:2,c:3};
    var entries = Object.entries(obj4);
    for (let i=0;i<entries.length;i++){
        console.log(entries[i][0]+"="+entries[i][1]);
    }
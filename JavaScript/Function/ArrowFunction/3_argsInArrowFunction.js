function foo (){
    console.log(arguments[0]);
}
foo(5);
let bar =()=>{
    console.log(arguments[5]);
}
bar(5);// undefined
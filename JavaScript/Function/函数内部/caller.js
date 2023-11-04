function foo(){
    console.log(foo.caller);
}


function bar(){
    foo();
}
bar(); // [Function: bar]



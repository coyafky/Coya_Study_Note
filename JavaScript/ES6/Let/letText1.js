{
    let school = 'Rocket School';
    function fn(){
        console.log(school); // Rocket School
    }
    fn();
}

fn();//  Rocket School


// function fn2(){
//     console.log(school);
// }

// fn2() // ReferenceError: school is not defined
// 说明let是块级作用域，外面的函数无法访问


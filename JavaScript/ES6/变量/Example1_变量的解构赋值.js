

// 对象的解构

const zhao  ={
    name: 'zhao',
    age: 20,
    sex: 'man',

    xiaoping :function() {
        console.log("我可以出演1小品");
    }
};

// const {name,age,sex,xiaoping} = zhao;
// console.log(name);
// console.log(age);
// console.log(sex);
// console.log(xiaoping);

let {xiaoping} = zhao;
xiaoping();
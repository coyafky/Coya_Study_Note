 //向对象中添加方法 up down
 let game = {
    name:'俄罗斯方块',
    up: function(){},
    down: function(){}
};

//声明一个对象
// let methods = {
//     up: Symbol(),
//     down: Symbol()
// };

// game[methods.up] = function(){
//     console.log("我可以改变形状");
// }

// game[methods.down] = function(){
//     console.log("我可以快速下降!!");
// }

// console.log(game);

//
let youxi = {
    name:"狼人杀",
    [Symbol('say')]: function(){
        console.log("我可以发言")
    },
    [Symbol('zibao')]: function(){
        console.log('我可以自爆');
    }
}

console.log(youxi)

let name = 'coya';
let change = function (){
    console.log('we can change you');
}

const  school ={
    name,
    change,
    // 同名就可以简写

    improve:function(){
        console.log('we can improve you');
    }

}

console.log(school); 
//{
//     name: 'coya',
//     change: [Function: change],
//     improve: [Function: improve]
// }

school.change(); // we can change you
school.improve(); // we can improve you
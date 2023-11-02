// 一个外层控制的循环
// 一个内层控制的循环

for (let  i=1;i<=9;i++){
    for(let j=1;j<i+1;j++){
        console.log(`${i}*${j}=${i*j}`);
    }
    console.log('\n');
}
function sum(a, b, ...numbers){
    return a + b + numbers.reduce((acc, curr) => acc + curr, a+b);
}

console.log(sum(1, 2, 3, 4, 5)); //18

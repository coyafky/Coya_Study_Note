const set = new Set();
// 使用循环创建包含 0 到 10 的集合
for (let i=0;i<=10;i++){
    set.add(i);

}
console.log(set);

set.delete(10);

console.log(set);

set.clear();
console.log(set);


const city =[
    "Beijing","shanghai","gaungzhou","shenzhen","wuhan"
]

const SeTCIty = new Set(city);
console.log(SeTCIty);

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]

const map = new Map(countries);
console.log(map);
console.log(map.size);


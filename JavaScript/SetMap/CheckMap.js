const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)

// 从Map获取值
console.log(countriesMap.get('Finland')) // Helsinki;

// 检查地图中的键

console.log(countriesMap.has('Finland'))

// 使用循环从地图中获取所有值

for (const country of countriesMap){
    console.log(country);
}

for (const [country, city] of countriesMap){
    console.log(country, city)
}



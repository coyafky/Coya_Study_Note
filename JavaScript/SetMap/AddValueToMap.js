const countriesMap = new Map();
console.log(countriesMap.size);//0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap.size);//3
console.log(countriesMap);
// Map(3) {
//     'Finland' => 'Helsinki',
//     'Sweden' => 'Stockholm',
//     'Norway' => 'Oslo'
//   }
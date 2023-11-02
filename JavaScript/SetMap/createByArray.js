const languages =[
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages);
// Set(4) { 'English', 'Finnish', 'French', 'Spanish' }

// set 是一个可迭代对象

for (const lang of setOfLanguages){
    console.log(lang);  
}
//English
// Finnish
// French
// Spanish


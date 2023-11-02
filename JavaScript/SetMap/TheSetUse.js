
//创建了一个唯一数组。这个数组是存在多个相同项的
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

// 使用set 确定为一项

const uniqueLanguages = new Set(languages);
console.log(uniqueLanguages);// Set(4) { 'English', 'Finnish', 'French', 'Spanish' }
console.log(uniqueLanguages.size);//4

const counts =[];
const count ={};

for (const lang of uniqueLanguages){
    const filterlang = languages.filter((lng)=>lng===lang);
    console.log(filterlang);
    //[ 'English', 'English', 'English' ]
    // [ 'Finnish' ]
    // [ 'French', 'French' ]
    // [ 'Spanish' ]

    counts.push ({lang:lang,count:filterlang.length});
}
console.log(counts)
// /[
//     { lang: 'English', count: 3 },
//     { lang: 'Finnish', count: 1 },
//     { lang: 'French', count: 2 },
//     { lang: 'Spanish', count: 1 }
//   ]
const WBG =['Theshy',"weiwei","xiaohu"];
const Lng =['Light'] ;
const Fpx =['crisp'] ;

const NewWBG =[...WBG, ...Lng, ...Fpx];

console.log(NewWBG); // [ 'Theshy', 'weiwei', 'xiaohu', 'Light', 'crisp' ]

const NewWBG2 = WBG.concat(Lng, Fpx);
console.log(NewWBG2); // [ 'Theshy', 'weiwei', 'xiaohu', 'Light', 'crisp' ]
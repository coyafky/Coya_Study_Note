const symbol = Symbol('foo');
console.log(symbol.toString()); //Symbol(foo)
console.log(typeof(symbol)); //symbol

let s2 = Symbol('黑马');
let s3 = Symbol('黑马');

console.log(s2);
console.log(s3);

console.log(s2 === s3); // false

let s4 = Symbol.for('黑马');
console.log(s4);
console.log(typeof(s4)); // symbol

let s5 = Symbol.for('黑马');
console.log(s4===s5); // true


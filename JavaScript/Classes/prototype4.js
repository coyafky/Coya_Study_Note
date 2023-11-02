const o = {
    a: 1,
    b: 2,
    // __proto__ sets the [[Prototype]]. It's specified here
    // as another object literal.
    __proto__: {
      b: 3,
      c: 4,
    },
  };

  
  console.log(o.b); // 2
  console.log(o.__proto__.b);//3
  console.log(o.c); // 4
  console.log(o.__proto__.a);//undefined


  // Yes, b is the same variable in both cases. When you access o.b, it looks up the value of b on the o object. When you access o.__proto__.b, it looks up the value of b on the __proto__ object, which is the prototype object of the o object. In this case, both b values are 2, so both lines of code will log 2.

  // It's important to note that when you access o.__proto__.b, you are not actually accessing the b property of the __proto__ object. Instead, you are accessing the b property of the prototype object, which is an object with a b property set to 3. This is why the log output is 3.

  // Yes, o and o.__proto__ are different objects. o is an object with properties a, b, and __proto__, while o.__proto__ is the prototype object for o. They have different structures and purposes.

// // 
// No, o._proto_ is not extending o. The __proto__ property is used to define the prototype chain for an object, and the prototype object is not directly accessible through the __proto__ property. Instead, when you access o.__proto__, you are accessing the prototype object for o.
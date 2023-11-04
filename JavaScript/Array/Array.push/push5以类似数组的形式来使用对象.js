const obj = {
    length: 0,
  
    addElem(elem) {
      // obj.length is automatically incremented
      // every time an element is added.
      [].push.call(this, elem);
    },
  };
  
  // Let's add some empty objects just to illustrate.
  obj.addElem({});
  obj.addElem({});
  console.log(obj.length); // 2
  
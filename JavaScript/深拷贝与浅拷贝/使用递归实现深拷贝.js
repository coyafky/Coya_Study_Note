function deepClone(o) {
    // if o is not an object 
    if (!o || (typeof o) != 'object') return o
    let res = Array.isArray(o) ? [] : {}
    let keys = Object.keys(o) 
    for (let i = 0; i< keys.length; i++) {
      let key = keys[i]
      if (typeof key === 'object') {
          res[key] = deepClone(o[key])
      } else {
          res[key] = o[key]
      }
    }
    return res
  }
  
let obj1 = {
    x: {name: 'Leo'},
    y: undefined,
    z: function add () {},
    t: Symbol('tt'),
    m: [1, 2, 3, 4, 5],
    n: [[1, 2]]
  }
  
  let obj2 = deepClone(obj1)
  obj1.n[0].push(3)
  
  console.log(obj2.n[0]) // [1, 2]
  